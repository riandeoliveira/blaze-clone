import { Icon } from "assets";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { statusStore } from "stores/status.store";
import styles from "styles/components/Rocket.module.scss";

export const Rocket = observer((): ReactElement => {
  return (
    <div className={styles.rocket_area}>
      <div className={styles.rocket}>
        <Icon.CrashRocket />
      </div>
      <div className={styles.rocket_trail} data-crashed={statusStore.isCrashed}></div>
    </div>
  );
});
