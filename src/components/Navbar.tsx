import { Icon } from "assets";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "styles/components/Navbar.module.scss";

export const Navbar = observer((): ReactElement => {
  return (
    <nav className={styles.navbar_area}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" className={styles.link} data-selected>
            <Icon.Casino className={styles.icon} />
            <span className={styles.text}>Cassino</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>
            <Icon.Sports className={styles.icon} />
            <span className={styles.text}>Esportes</span>
          </a>
        </li>
      </ul>
    </nav>
  );
});
