import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const AmountEarned = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.earned}>
        <span className={styles.label}>Valor Ganho</span>
        <div className={styles.amount_container}>
          <span className={styles.label}>0,00</span>
          <span className={styles.currency}>R$</span>
        </div>
      </div>
    </div>
  );
});
