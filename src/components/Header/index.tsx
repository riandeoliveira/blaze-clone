import { Icon } from "assets";
import { Navbar } from "components/Navbar";
import { Wallet } from "components/Wallet";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Header = observer((): ReactElement => {
  return (
    <header>
      <div className={styles.logo}>
        <a href="#">
          <Icon.BlazeLogo />
        </a>
      </div>
      <div className={styles.header_area}>
        <div className={styles.header_container}>
          <Navbar />
          <div className={styles.menu}>
            <Wallet />
            <button type="button" className={styles.button}>
              Depositar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
