import { crashGame } from "features/crash-game";
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
          {crashGame.statusStore.isLoading ? (
            <LoadingBar />
          ) : (
            <>
              {crashGame.statusStore.isCrashed ? <CrashedMultiplier /> : <RunningMultiplier />}
              <Rocket />
            </>
          )}
        </div>
      </div>
    </div>
  );
});
