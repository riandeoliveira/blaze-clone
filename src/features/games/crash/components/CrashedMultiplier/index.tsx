import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { crashGame } from "../..";
import styles from "./styles.module.scss";

export const CrashedMultiplier = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.multiplier_container}>
        <span className={styles.multiplier}>
          {crashGame.displayStore.multiplier.toFixed(2).replace(".", ",")}X
        </span>
      </div>
      <div className={styles.label_container}>
        <span className={styles.label}>CRASHED</span>
      </div>
    </div>
  );
});
