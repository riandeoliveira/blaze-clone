import { Tabs } from "components/Tabs";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { tabStore } from "stores/tab.store";
import styles from "styles/components/ControlPanel.module.scss";
import { BetPanel } from "./BetPanel";

export const ControlPanel = observer((): ReactElement => {
  return (
    <div className={styles.control_panel_area}>
      <Tabs
        data={[
          { label: "Normal", mode: "normal" },
          { label: "Auto", mode: "auto" },
          { label: "Rodadas Grátis", mode: "free" },
        ]}
      />
      {tabStore.mode === "normal" ? <BetPanel.Normal /> : <></>}
      {tabStore.mode === "auto" ? <BetPanel.Auto /> : <></>}
      {tabStore.mode === "free" ? <BetPanel.Free /> : <></>}
    </div>
  );
});
