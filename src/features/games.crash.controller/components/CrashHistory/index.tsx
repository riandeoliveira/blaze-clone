import { localStorageExtension } from "extensions/local-storage";
import { statusStore } from "features/games.crash.screen/stores/status.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const CrashHistory = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Anterior</span>
      <div className={styles.list_container}>
        <div className={styles.list}>
          {localStorageExtension.getCrashHistory().map((crashPoint, index) => (
            <span
              className={styles.crash_point}
              data-crashed={statusStore.isCrashed}
              data-crash-good={crashPoint >= 2}
              key={index}
            >
              {crashPoint.toFixed(2).replace(".", ",")}X
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
