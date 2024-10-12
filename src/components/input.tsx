import { Icon } from "@/assets/icons";
import { cn } from "@/utils/cn";
import _ from "lodash";
import type { MouseEventHandler } from "react";
import { useRef, type ReactElement } from "react";
import type { NumberFormatBaseProps } from "react-number-format";
import { NumericFormat } from "react-number-format";

interface CheckboxProps {
  isChecked: boolean;
  label: string;
  onCheck: MouseEventHandler<HTMLElement>;
}

const InputCheckbox = ({ onCheck, isChecked, label }: CheckboxProps): ReactElement => {
  return (
    <div onClick={onCheck} className="items-center cursor-pointer flex gap-4">
      <button
        type="button"
        className="items-center bg-c-grey-2 border border-solid border-c-separator rounded-sm cursor-pointer flex h-4 justify-center w-4"
      >
        {isChecked && <Icon.Check />}
      </button>
      <label htmlFor={label} className="text-white cursor-pointer text-xs font-sofia-pro">
        {label}
      </label>
    </div>
  );
};

interface InputNumericProps extends NumberFormatBaseProps {
  hasSuffix?: boolean;
  label: string;
  limit?: number;
  placeholderClassName?: string;
  value?: number;
}

const InputNumeric = ({
  hasSuffix = false,
  label,
  limit = 999999,
  placeholderClassName,
  value,
  ...rest
}: InputNumericProps): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = (): void => {
    inputRef.current?.focus();
  };

  return (
    <div className="items-center bg-c-background rounded flex gap-1 h-12 py-1.5 px-4 w-full">
      <NumericFormat
        allowLeadingZeros
        allowNegative={false}
        className="bg-transparent text-white text-xs font-semibold h-full outline-0 pt-[13px] w-full peer"
        decimalScale={2}
        decimalSeparator=","
        fixedDecimalScale
        getInputRef={inputRef}
        isAllowed={({ floatValue }): boolean => (floatValue ? floatValue <= limit : true)}
        name={_.kebabCase(label)}
        thousandSeparator="."
        title={label}
        value={value === 0 ? 0.01 : value}
        {...rest}
      />
      <span
        className={cn(
          "text-c-light-grey text-xs font-sofia-pro font-bold absolute transition-all duration-200 peer-focus:text-[8px] peer-focus:-mt-[25px]",
          value ? "text-[8px] -mt-[25px]" : "",
          placeholderClassName,
        )}
        onClick={handleLabelClick}
      >
        {label}
      </span>
      {hasSuffix && <span className="text-c-light-grey text-sm font-semibold">R$</span>}
    </div>
  );
};

export const Input = {
  Checkbox: InputCheckbox,
  Numeric: InputNumeric,
};
