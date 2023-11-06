import { Icon } from "assets";
import { crashGame } from "features/crash-game";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
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
