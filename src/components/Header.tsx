import { icons } from "assets";
import { Navbar } from "components/Navbar";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import SVG from "react-inlinesvg";
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

  const handleDeposit = (): void => {
    localStorageStore.addToWalletBalance(10);
  };

  return (
    <header className={styles.header_area}>
      <div className={styles.logo}>
        <a href="#" title="Vá para a página inicial">
          {windowWidth <= 768 ? (
            <SVG src={icons.blazeMobileLogo} />
          ) : (
            <SVG src={icons.blazeDesktopLogo} />
          )}
        </a>
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
              <SVG src={icons.brl} className={styles.icon} />
            </div>
            <button type="button" className={styles.button} onClick={handleDeposit}>
              Depositar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
