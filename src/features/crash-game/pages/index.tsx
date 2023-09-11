import { Header } from "components/Header";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { Layer, Stage } from "react-konva";
import { LoadingBar } from "../components/LoadingBar";
import { Multiplier } from "../components/Mutiplier";
import { Rocket } from "../components/Rocket";
import { crashGameStore } from "../store";
import styles from "./styles.module.scss";

export const Crash = observer((): ReactElement => {
  const { isCrashed, isLoading } = crashGameStore;

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
                    {isLoading ? (
                      <LoadingBar />
                    ) : (
                      <>
                        <Rocket />
                        {isCrashed ? <Multiplier.Crashed /> : <Multiplier.Running />}
                      </>
                    )}
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
