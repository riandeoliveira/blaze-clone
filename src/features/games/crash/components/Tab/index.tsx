import { observer } from "mobx-react-lite";
import type { ReactElement, ReactNode } from "react";
import { crashGame } from "../..";
import type { TabModeType } from "../../store/controller.store";
import styles from "./styles.module.scss";

interface TabProps {
  children: ReactNode;
  mode: TabModeType;
}

export const Tab = observer(({ children, mode }: TabProps): ReactElement => {
  return (
    <span
      className={styles.tab}
      onClick={(): void => crashGame.controllerStore.setTabMode(mode)}
      data-selected={crashGame.controllerStore.tabMode === mode}
    >
      {children}
    </span>
  );
});
