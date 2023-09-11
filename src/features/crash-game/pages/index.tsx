import { Header } from "components/Header";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";
import { Layer, Stage } from "react-konva";
import { Multiplier } from "../components/Mutiplier";
import { crashGameStore } from "../store";
import styles from "./styles.module.scss";

export const Crash = observer((): ReactElement => {
  const { isCrashed, multiplier } = crashGameStore;

  useEffect(() => {
    if (multiplier >= 2) {
      crashGameStore.setIsCrashed(true);
    }
  }, [multiplier]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.game_controller}>
            <div className={styles.crash_controller}>
              <div className={styles.container}>
                <Stage width={679} height={383}>
                  <Layer>
                    {/* <Rocket /> */}
                    {isCrashed ? <Multiplier.Crashed /> : <Multiplier.Running />}
                    {/* <LoadingBar /> */}
                  </Layer>
                </Stage>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
});
