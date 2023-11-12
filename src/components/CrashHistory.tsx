import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { localStorageStore } from "stores/local-storage.store";
import { statusStore } from "stores/status.store";
import styles from "styles/components/CrashHistory.module.scss";

export const CrashHistory = observer((): ReactElement => {
  return (
    <div className={styles.crash_history_area}>
      <span className={styles.label}>Anterior</span>
      <div className={styles.list_container}>
        <div className={styles.list}>
          {localStorageStore.crashHistory.map((crashPoint, index) => (
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
