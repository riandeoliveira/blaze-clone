import { Icon } from "assets";
import { Navbar } from "components/Navbar";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import { localStorageStore } from "stores/local-storage.store";
import styles from "styles/components/Header.module.scss";

export const Header = observer((): ReactElement => {
  const [windowWidth, setWindowWidth] = useState<number>(innerWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };

    addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header_area}>
      <div className={styles.logo}>
        <a href="#">{windowWidth <= 768 ? <Icon.BlazeMobileLogo /> : <Icon.BlazeDesktopLogo />}</a>
      </div>
      <div className={styles.header_container}>
        <div className={styles.header_content}>
          <Navbar />
          <div className={styles.menu}>
            <div className={styles.wallet}>
              <span className={styles.currency}>
                {localStorageStore.walletBalance.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <Icon.BRL className={styles.icon} />
            </div>
            <button type="button" className={styles.button}>
              Depositar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
