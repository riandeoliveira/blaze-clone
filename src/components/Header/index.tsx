import { Icon } from "assets";
import { Button } from "components/Button";
import { Navbar } from "components/Navbar";
import { Wallet } from "components/Wallet";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Header = observer((): ReactElement => {
  return (
    <>
      <div className={styles.logo}>
        <a href="#">
          <Icon.BlazeLogo />
        </a>
      </div>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <Navbar />
          <div className={styles.menu}>
            <div className={styles.icons}>
              <Icon.Notifications className={styles.icon} />
              <Icon.Profile className={styles.icon} />
            </div>
            <Wallet />
            <Button>Depositar</Button>
          </div>
        </div>
      </header>
    </>
  );
});
