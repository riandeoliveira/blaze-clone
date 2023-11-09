import { statusStore } from "features/games.crash.screen/stores/status.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { CrashedMultiplier } from "../CrashedMultiplier";
import { LoadingBar } from "../LoadingBar";
import { Rocket } from "../Rocket";
import { RunningMultiplier } from "../RunningMultiplier";
import styles from "./styles.module.scss";

export const Display = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.display_container}>
        <div className={styles.display}>
          {statusStore.isLoading ? (
            <LoadingBar />
          ) : (
            <>
              {statusStore.isCrashed ? <CrashedMultiplier /> : <RunningMultiplier />}
              <Rocket />
            </>
          )}
        </div>
      </div>
    </div>
  );
});
