import { Icon } from "assets";
import { Navbar } from "components/Navbar";
import { Wallet } from "components/Wallet";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import styles from "./styles.module.scss";

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
    <header>
      <div className={styles.logo}>
        <a href="#">{windowWidth <= 768 ? <Icon.BlazeMobileLogo /> : <Icon.BlazeDesktopLogo />}</a>
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
