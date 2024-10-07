import { displayStore } from "@/stores/display.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

export const Crashed = observer((): ReactElement => {
  return (
    <div className="flex flex-col absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2">
      <div className="items-center bg-c-red rounded-t flex h-20 justify-center w-[180px] s-600px:h-[60px] s-600px:w-40">
        <span className="text-white font-roboto-mono text-[32px] font-bold">
          {displayStore.multiplier.toFixed(2).replace(".", ",")}X
        </span>
      </div>
      <div className="items-center bg-c-dark-red-2 rounded-b text-white flex h-10 justify-center">
        <span className="font-sofia-pro">CRASHED</span>
      </div>
    </div>
  );
});
