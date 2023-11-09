import { Icon } from "assets";
import { localStorageExtension } from "extensions/local-storage";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Wallet = observer((): ReactElement => {
  const currency: string = localStorageExtension.getWalletBalance().toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={styles.wallet}>
      <span className={styles.currency}>{currency}</span>
      <Icon.BRL className={styles.icon} />
    </div>
  );
});
