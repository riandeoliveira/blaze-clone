import { crashGame } from "features/crash-game";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { Layer, Stage } from "react-konva";
import { LoadingBar } from "../LoadingBar";
import { Multiplier } from "../Mutiplier";
import { Rocket } from "../Rocket";
import styles from "./styles.module.scss";

export const Display = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <Stage width={679} height={383}>
          <Layer>
            {crashGame.store.isLoading ? (
              <LoadingBar />
            ) : (
              <>
                <Rocket />
                {crashGame.store.isCrashed ? <Multiplier.Crashed /> : <Multiplier.Running />}
              </>
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
});
