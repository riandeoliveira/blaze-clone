import { Multiplier } from "components/Multiplier";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { statusStore } from "stores/status.store";
import styles from "styles/components/Display.module.scss";
import { LoadingBar } from "./LoadingBar";
import { Rocket } from "./Rocket";

export const Display = observer((): ReactElement => {
  return (
    <div className={styles.display_area}>
      <div className={styles.display_container}>
        <div className={styles.display}>
          {statusStore.isLoading ? (
            <LoadingBar />
          ) : (
            <>
              {statusStore.isCrashed ? <Multiplier.Crashed /> : <Multiplier.Running />}
              <Rocket />
            </>
          )}
        </div>
      </div>
    </div>
  );
});
