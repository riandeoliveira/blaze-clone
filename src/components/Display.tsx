import { Multiplier } from "@/components/Multiplier";
import { statusStore } from "@/stores/status.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { LoadingBar } from "./LoadingBar";
import { Rocket } from "./Rocket";

export const Display = observer((): ReactElement => {
  return (
    <div className="flex flex-col p-[14px]">
      <div className="bg-c-background rounded p-5">
        <div className="items-end flex h-96 justify-end relative s-600px:h-[200px]">
          {statusStore.isLoading ? (
            <LoadingBar />
          ) : (
            <>
              {statusStore.isCrashed ? <Multiplier.Crashed /> : <Multiplier.Running />}
              <Rocket />
            </>
          )}
        </div>
      </div>
    </div>
  );
});
