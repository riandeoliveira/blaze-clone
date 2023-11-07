import { tabStore } from "features/games.crash.controller/stores/tab.store";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { AutoBetPanel } from "../AutoBetPanel";
import { FreeBetPanel } from "../FreeBetPanel";
import { NormalBetPanel } from "../NormalBetPanel";
import { Tab } from "../Tab";
import styles from "./styles.module.scss";

export const PanelArea = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.tab_container}>
        <Tab mode="normal">Normal</Tab>
        <Tab mode="auto">Auto</Tab>
        <Tab mode="free">Rodadas Grátis</Tab>
      </div>
      {tabStore.mode === "normal" ? <NormalBetPanel /> : null}
      {tabStore.mode === "auto" ? <AutoBetPanel /> : null}
      {tabStore.mode === "free" ? <FreeBetPanel /> : null}
    </div>
  );
});
