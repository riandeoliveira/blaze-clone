import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
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
    return (
      <div className={styles.container}>
        <NumericFormat
          allowNegative={false}
          allowLeadingZeros
          className={styles.field}
          data-filled={value ? true : false}
          isAllowed={({ floatValue }): boolean => (floatValue ? floatValue <= limit : true)}
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator=","
          title={label}
          onValueChange={onChange}
          thousandSeparator="."
          value={value === 0 ? 0.01 : value}
        />
        <span className={styles.placeholder}>{label}</span>
        {hasSuffix ? <span className={styles.currency}>R$</span> : null}
      </div>
    );
  },
);
