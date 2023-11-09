import { Header } from "components/Header";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { CrashHistory } from "../../games.crash.controller/components/CrashHistory";
import { PanelArea } from "../../games.crash.controller/components/PanelArea";
import { Display } from "../../games.crash.screen/components/Display";
import styles from "./styles.module.scss";

export const Crash = observer((): ReactElement => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.game}>
            <PanelArea />
            <div className={styles.display}>
              <Display />
              <CrashHistory />
            </div>
          </div>
        </div>
      </main>
    </>
  );
});
