import { observer } from "mobx-react-lite";
import { useRef, type ReactElement } from "react";
import type { NumberFormatBaseProps } from "react-number-format";
import { NumericFormat } from "react-number-format";
import styles from "styles/components/Form/NumberField.module.scss";

interface NumberFieldProps extends NumberFormatBaseProps {
  hasSuffix?: boolean;
  label: string;
  limit?: number;
  placeholderClassName?: string;
  value?: number;
}

export const NumberField = observer(
  ({
    hasSuffix = false,
    label,
    limit = 999999,
    placeholderClassName,
    value,
    ...rest
  }: NumberFieldProps): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleLabelClick = (): void => {
      inputRef.current?.focus();
    };

    return (
      <div className={styles.form_number_field_area}>
        <NumericFormat
          allowLeadingZeros
          allowNegative={false}
          className={styles.field}
          data-filled={value ? true : false}
          decimalScale={2}
          decimalSeparator=","
          fixedDecimalScale
          getInputRef={inputRef}
          isAllowed={({ floatValue }): boolean => (floatValue ? floatValue <= limit : true)}
          thousandSeparator="."
          title={label}
          value={value === 0 ? 0.01 : value}
          {...rest}
        />
        <span
          className={`${styles.placeholder} ${placeholderClassName ?? ""}`}
          onClick={handleLabelClick}
        >
          {label}
        </span>
        {hasSuffix ? <span className={styles.currency}>R$</span> : <></>}
      </div>
    );
  },
);
