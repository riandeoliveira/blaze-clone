import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { displayStore } from "stores/display.store";
import styles from "styles/components/Multiplier/Crashed.module.scss";

export const Crashed = observer((): ReactElement => {
  return (
    <div className={styles.multiplier_crashed_area}>
      <div className={styles.multiplier_container}>
        <span className={styles.multiplier}>
          {displayStore.multiplier.toFixed(2).replace(".", ",")}X
        </span>
      </div>
      <div className={styles.label_container}>
        <span className={styles.label}>CRASHED</span>
      </div>
    </div>
  );
});
