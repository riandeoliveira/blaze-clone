import { Icon } from "assets";
import { observer } from "mobx-react-lite";
import { useState, type ReactElement } from "react";
import styles from "./styles.module.scss";

interface CheckboxProps {
  label: string;
}

export const Checkbox = observer(({ label }: CheckboxProps): ReactElement => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>{checked ? <Icon.Check /> : null}</div>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
    </div>
  );
});
