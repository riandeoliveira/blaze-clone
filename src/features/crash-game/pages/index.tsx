import { Header } from "components/Header";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { Layer, Stage } from "react-konva";
import { crashGame } from "..";
import { LoadingBar } from "../components/LoadingBar";
import { Multiplier } from "../components/Mutiplier";
import { PreviousCrashList } from "../components/PreviousCrashList";
import { Rocket } from "../components/Rocket";
import styles from "./styles.module.scss";

export const Crash = observer((): ReactElement => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.game_controller}>
            <div className={styles.crash_controller}>
              <div className={styles.controller_container}>
                <Stage width={679} height={383}>
                  <Layer>
                    {crashGame.store.isLoading ? (
                      <LoadingBar />
                    ) : (
                      <>
                        <Rocket />
                        {crashGame.store.isCrashed ? (
                          <Multiplier.Crashed />
                        ) : (
                          <Multiplier.Running />
                        )}
                      </>
                    )}
                  </Layer>
                </Stage>
              </div>
            </div>
            <PreviousCrashList />
          </div>
        </div>
      </main>
    </>
  );
});
