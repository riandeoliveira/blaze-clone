import { crashGame } from "features/crash-game";
import type { TabModeType } from "features/crash-game/types";
import { observer } from "mobx-react-lite";
import type { ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

interface TabProps {
  children: ReactNode;
  mode: TabModeType;
}

export const Tab = observer(({ children, mode }: TabProps): ReactElement => {
  return (
    <span
      className={styles.tab}
      onClick={(): void => crashGame.store.setTabMode(mode)}
      data-selected={crashGame.store.tabMode === mode}
    >
      {children}
    </span>
  );
});
