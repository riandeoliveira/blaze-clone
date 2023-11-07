import { observer } from "mobx-react-lite";
import { useRef, type ReactElement } from "react";
import type { NumberFormatBaseProps } from "react-number-format";
import { NumericFormat } from "react-number-format";
import styles from "./styles.module.scss";

interface NumberFieldProps extends NumberFormatBaseProps {
  hasSuffix?: boolean;
  label: string;
  limit?: number;
  value?: number | null;
}

export const NumberField = observer(
  ({
    label,
    limit = 999999,
    hasSuffix = false,
    value,
    ...rest
  }: NumberFieldProps): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleLabelClick = (): void => {
      inputRef.current?.focus();
    };

    return (
      <div className={styles.container}>
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
        <span className={styles.placeholder} onClick={handleLabelClick}>
          {label}
        </span>
        {hasSuffix ? <span className={styles.currency}>R$</span> : null}
      </div>
    );
  },
);
