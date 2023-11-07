import { Icon } from "assets";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { localStorageStore } from "store/local-storage.store";
import styles from "./styles.module.scss";

export const Wallet = observer((): ReactElement => {
  return (
    <div className={styles.wallet}>
      <span className={styles.currency}>
        {localStorageStore.walletBalance?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <Icon.BRL className={styles.icon} />
    </div>
  );
});
