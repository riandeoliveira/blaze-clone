import { Header } from "components/Header";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { Controller } from "../components/Controller";
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
            <Controller />
            <div className={styles.display}>
              <Display />
              <PreviousCrashList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
});
