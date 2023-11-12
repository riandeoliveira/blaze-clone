import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { tabStore } from "stores/tab.store";
import styles from "styles/components/Tabs.module.scss";
import type { TabModeType } from "types/tab";
import { v4 as uuid } from "uuid";

interface TabData {
  label: string;
  mode: TabModeType;
}

interface TabsProps {
  data: TabData[];
}

export const Tabs = observer(({ data }: TabsProps): ReactElement => {
  return (
    <div className={styles.tabs_area}>
      {data.map(({ label, mode }) => (
        <button
          type="button"
          className={styles.button}
          onClick={(): void => tabStore.setMode(mode)}
          data-selected={tabStore.mode === mode}
          key={uuid()}
        >
          {label}
        </button>
      ))}
    </div>
  );
});
