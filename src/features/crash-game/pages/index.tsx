import { Header } from "components/Header";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { Display } from "../components/Display";
import { PreviousCrashList } from "../components/PreviousCrashList";
import styles from "./styles.module.scss";

export const Crash = observer((): ReactElement => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.game}>
            <Display />
            <PreviousCrashList />
          </div>
        </div>
      </main>
    </>
  );
});
