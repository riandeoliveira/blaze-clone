import { Icon } from "assets";
import { observer } from "mobx-react-lite";
import type { MouseEventHandler } from "react";
import { type ReactElement } from "react";
import styles from "./styles.module.scss";

interface CheckboxProps {
  checked: boolean;
  label: string;
  onCheck: MouseEventHandler<HTMLElement>;
}

export const Checkbox = observer(({ checked, label, onCheck }: CheckboxProps): ReactElement => {
  return (
    <div className={styles.container} onClick={onCheck}>
      <div className={styles.checkbox}>{checked ? <Icon.Check /> : null}</div>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
    </div>
  );
});
