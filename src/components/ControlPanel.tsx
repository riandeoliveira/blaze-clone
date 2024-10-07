import { Tabs } from "@/components/Tabs";
import { tabStore } from "@/stores/tab.store";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { BetPanel } from "./BetPanel";

export const ControlPanel = observer((): ReactElement => {
  return (
    <div className="border-r border-solid border-c-separator flex flex-col gap-4 max-w-[325px] py-4 px-6 w-full s-1080px:border-0 s-1080px:max-w-none">
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
