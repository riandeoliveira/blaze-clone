import { observer } from "mobx-react-lite";
import type { ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  children: ReactNode;
}

export const Button = observer(({ children }: ButtonProps): ReactElement => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
});
