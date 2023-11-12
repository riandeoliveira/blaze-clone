import { ControlPanel } from "components/ControlPanel";
import { Header } from "components/Header";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import styles from "styles/pages/Crash.module.scss";
import { Display } from "../../components/Display";
import { CrashHistory } from "../../components/CrashHistory";

export const Crash = observer((): ReactElement => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.game}>
            <ControlPanel />
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
