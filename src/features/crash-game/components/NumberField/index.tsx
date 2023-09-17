import { observer } from "mobx-react-lite";
import { useState, type ReactElement } from "react";
import { NumericFormat } from "react-number-format";
import styles from "./styles.module.scss";

interface NumberFieldProps {
  label: string;
}

export const NumberField = observer(({ label }: NumberFieldProps): ReactElement => {
  const [value, setValue] = useState<number | null | undefined>(null);

  return (
    <div className={styles.container}>
      <NumericFormat
        allowNegative={false}
        className={styles.field}
        data-filled={value ? value.toString().length > 0 : false}
        decimalSeparator=","
        title={label}
        onValueChange={({ floatValue }): void => setValue(floatValue)}
        thousandSeparator="."
        value={value}
      />
      <span className={styles.placeholder}>{label}</span>
      <span className={styles.currency}>R$</span>
    </div>
  );
});
