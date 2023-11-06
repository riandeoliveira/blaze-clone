import { Icon } from "assets";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { crashGame } from "../..";
import styles from "./styles.module.scss";

export const Rocket = observer((): ReactElement => {
  const { isCrashed } = crashGame.statusStore;

  return (
    <div className={styles.container}>
      <div className={styles.rocket}>
        <Icon.CrashRocket />
      </div>
      <div className={styles.rocket_trail} data-crashed={isCrashed}></div>
    </div>
  );
});
