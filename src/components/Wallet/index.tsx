import { Icon } from "assets";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Wallet = observer((): ReactElement => {
  return (
    <div className={styles.wallet}>
      <div className={styles.wallet_container}></div>
      <span className={styles.currency}>R$ 5,92</span>
      <Icon.BRL className={styles.icon} />
    </div>
  );
});
