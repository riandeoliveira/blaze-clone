import { observer } from "mobx-react-lite";
import { useRef, type ReactElement } from "react";
import type { OnValueChange } from "react-number-format";
import { NumericFormat } from "react-number-format";
import styles from "./styles.module.scss";

interface NumberFieldProps {
  hasSuffix?: boolean;
  label: string;
  limit?: number;
  value?: number | null;
  onChange: OnValueChange;
}

export const NumberField = observer(
  ({
    label,
    limit = 999999,
    hasSuffix = false,
    value,
    onChange,
  }: NumberFieldProps): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickLabel = (): void => {
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
          onValueChange={onChange}
          thousandSeparator="."
          title={label}
          value={value === 0 ? 0.01 : value}
        />
        <span className={styles.placeholder} onClick={handleClickLabel}>
          {label}
        </span>
        {hasSuffix ? <span className={styles.currency}>R$</span> : null}
      </div>
    );
  },
);
