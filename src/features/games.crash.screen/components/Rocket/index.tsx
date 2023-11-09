import { Icon } from "assets";
import { statusStore } from "features/games.crash.screen/stores/status.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Rocket = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.rocket}>
        <Icon.CrashRocket />
      </div>
      <div className={styles.rocket_trail} data-crashed={statusStore.isCrashed}></div>
    </div>
  );
});
