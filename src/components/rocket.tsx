import { Icon } from "@/assets/icons";
import { useDependencies } from "@/contexts/dependencies-context";
import { cn } from "@/utils/cn";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

export const Rocket = observer((): ReactElement => {
  const { statusStore } = useDependencies();

  return (
    <div className="items-center flex flex-col">
      <div className="flex">
        <Icon.CrashRocket />
      </div>
      <div
        className={cn(
          "animate-high-takeoff s-600px:animate-low-takeoff bg-c-dark-red-2 translate-x-[0.5px] -translate-y-[6px] w-[5px]",
          statusStore.isCrashed ? "[animation-play-state:paused]" : "",
        )}
      />
    </div>
  );
});
