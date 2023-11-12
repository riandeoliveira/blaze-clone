import { icons } from "assets";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import SVG from "react-inlinesvg";
import styles from "styles/components/Navbar.module.scss";

export const Navbar = observer((): ReactElement => {
  return (
    <nav className={styles.navbar_area}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" title="Seção de Jogos" className={styles.link} data-selected>
            <SVG src={icons.casino} className={styles.icon} />
            <span className={styles.text}>Cassino</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#" title="Seção de Esportes" className={styles.link}>
            <SVG src={icons.sports} className={styles.icon} />
            <span className={styles.text}>Esportes</span>
          </a>
        </li>
      </ul>
    </nav>
  );
});
