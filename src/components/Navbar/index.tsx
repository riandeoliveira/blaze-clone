import { Icon } from "assets";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Navbar = observer((): ReactElement => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" className={styles.link} data-selected>
            <Icon.Cassino className={styles.icon} />
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
