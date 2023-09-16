import { crashGame } from "features/crash-game";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const PreviousCrashList = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Anterior</span>
      <div className={styles.list_container}>
        <div className={styles.list}>
          {crashGame.localStorageStore.previousCrashList?.map((crashPoint, index) => (
            <span className={styles.crash_point} data-crash-good={crashPoint >= 2} key={index}>
              {crashGame.tools.toDisplay(crashPoint)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
