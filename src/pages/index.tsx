import { ControlPanel } from "@/components/ControlPanel";
import { CrashHistory } from "@/components/CrashHistory";
import { Display } from "@/components/Display";
import { Header } from "@/components/header";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";

const Crash = observer((): ReactElement => {
  return (
    <>
      <Header />
      <main className="flex justify-center p-4 pt-0">
        <div className="max-w-[1072px] pt-12 w-full s-600px:pt-4">
          <div className="bg-c-background-two rounded flex s-1080px:flex-col-reverse">
            <ControlPanel />
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
