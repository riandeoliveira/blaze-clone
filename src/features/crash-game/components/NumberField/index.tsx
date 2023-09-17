import { observer } from "mobx-react-lite";
import { useState, type ReactElement } from "react";
import { NumericFormat } from "react-number-format";
import styles from "./styles.module.scss";

interface NumberFieldProps {
  label: string;
  limit?: number;
  hasSuffix?: boolean;
}

export const NumberField = observer(
  ({ label, limit = 999999, hasSuffix = false }: NumberFieldProps): ReactElement => {
    const [value, setValue] = useState<number | null | undefined>(null);

    return (
      <div className={styles.container}>
        <NumericFormat
          allowNegative={false}
          className={styles.field}
          data-filled={value ? value.toString().length > 0 : false}
          isAllowed={({ floatValue }): boolean => (floatValue ? floatValue <= limit : true)}
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator=","
          title={label}
          onValueChange={({ floatValue }): void => setValue(floatValue)}
          thousandSeparator="."
          value={value}
        />
        <span className={styles.placeholder}>{label}</span>
        {hasSuffix ? <span className={styles.currency}>R$</span> : null}
      </div>
    );
  },
);
