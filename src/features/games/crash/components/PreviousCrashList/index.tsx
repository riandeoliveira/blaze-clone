import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { crashGame } from "../..";
import styles from "./styles.module.scss";

export const PreviousCrashList = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Anterior</span>
      <div className={styles.list_container}>
        <div className={styles.list}>
          {crashGame.localStorageStore.previousCrashList.map((crashPoint, index) => (
            <span className={styles.crash_point} data-crash-good={crashPoint >= 2} key={index}>
              {crashPoint.toFixed(2).replace(".", ",")}X
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
