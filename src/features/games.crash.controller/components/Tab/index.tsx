import { tabStore } from "features/games.crash.controller/stores/tab.store";
import type { TabModeType } from "features/games.crash.controller/types";
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
      data-selected={tabStore.mode === mode}
      className={styles.tab}
      onClick={(): void => tabStore.setMode(mode)}
    >
      {children}
    </span>
  );
});
