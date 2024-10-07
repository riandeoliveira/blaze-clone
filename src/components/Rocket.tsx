import { Icon } from "@/assets/icons";
import { statusStore } from "@/stores/status.store";
import { cn } from "@/utils/cn";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

export const Rocket = observer((): ReactElement => {
  return (
    <div className="items-center flex flex-col">
      <div className="flex">
        <Icon.CrashRocket />
      </div>
      <div
        className={cn(
          "animate-high-takeoff s-600px:animate-low-takeoff bg-c-red translate-x-[0.5px] -translate-y-[5px] w-[5px]",
          statusStore.isCrashed ? "[animation-play-state:paused]" : "",
        )}
        data-crashed={statusStore.isCrashed}
      />
    </div>
  );
});
