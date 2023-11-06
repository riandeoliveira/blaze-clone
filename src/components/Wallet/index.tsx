import { Icon } from "assets";
import { crashGame } from "features/games/crash";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Wallet = observer((): ReactElement => {
  return (
    <div className={styles.wallet}>
      <span className={styles.currency}>
        {crashGame.localStorageStore.walletBalance?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <Icon.BRL className={styles.icon} />
    </div>
  );
});
