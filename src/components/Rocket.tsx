import { icons } from "assets";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import SVG from "react-inlinesvg";
import { statusStore } from "stores/status.store";
import styles from "styles/components/Rocket.module.scss";

export const Rocket = observer((): ReactElement => {
  return (
    <div className={styles.rocket_area}>
      <div className={styles.rocket}>
        <SVG src={icons.crashRocket} />
      </div>
      <div className={styles.rocket_trail} data-crashed={statusStore.isCrashed}></div>
    </div>
  );
});
