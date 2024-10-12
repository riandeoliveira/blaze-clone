import { Icon } from "@/assets/icons";
import { ControlPanel } from "@/components/control-panel";
import { CrashHistory } from "@/components/crash-history";
import { Display } from "@/components/display";
import { Header } from "@/components/header";
import { tabStore } from "@/stores/tab.store";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";

const Crash = observer((): ReactElement => {
  return (
    <>
      <Header.Root>
        <Header.Tabs>
          <Header.Tab href="#" icon={Icon.Casino} isSelected>
            Cassino
          </Header.Tab>
          <Header.Tab href="#" icon={Icon.Sports}>
            Esportes
          </Header.Tab>
        </Header.Tabs>
      </Header.Root>
      <main className="flex justify-center p-4 pt-0">
        <div className="max-w-[1072px] pt-12 w-full s-600px:pt-4">
          <div className="bg-c-background-two rounded flex s-1080px:flex-col-reverse">
            <ControlPanel.Root>
              <ControlPanel.Tabs>
                <ControlPanel.Tab mode="normal">Normal</ControlPanel.Tab>
                <ControlPanel.Tab mode="auto">Auto</ControlPanel.Tab>
                <ControlPanel.Tab mode="free">Rodadas Grátis</ControlPanel.Tab>
              </ControlPanel.Tabs>
              <>
                {tabStore.mode === "normal" ? <ControlPanel.NormalBet /> : <></>}
                {tabStore.mode === "auto" ? <ControlPanel.AutoBet /> : <></>}
                {tabStore.mode === "free" ? <ControlPanel.FreeBet /> : <></>}
              </>
            </ControlPanel.Root>
            <div className="max-w-[747px] w-full s-1080px:max-w-none">
              <Display />
              <CrashHistory />
            </div>
          </div>
        </div>
      </main>
    </>
  );
});

export default Crash;
