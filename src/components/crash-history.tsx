import { useDependencies } from "@/contexts/dependencies-context";
import { cn } from "@/utils/cn";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

const MAX_CRASH_POINTS: number = 24;

export const CrashHistory = observer((): ReactElement => {
  const { crashHistoryStore, statusStore } = useDependencies();

  return (
    <div className="border-t border-solid border-c-separator flex flex-col gap-3 py-4 px-6 relative">
      <span className="text-c-light-grey text-xs font-semibold uppercase font-sofia-pro leading-loose">
        Anterior
      </span>
      <div className="min-h-8 after:bg-corner-shadow after:content-[''] after:h-8 after:absolute after:top-[52px] after:w-6">
        <div className="flex flex-row-reverse gap-2 overflow-x-hidden">
          {crashHistoryStore.list.slice(0, MAX_CRASH_POINTS).map((crashPoint) => (
            <span
              className={cn(
                "items-center rounded cursor-pointer flex text-xs font-semibold h-8 tracking-wider px-1.5 font-sofia-pro",
                statusStore.isCrashed ? "first:animate-crash-recent-in" : "",
                crashPoint >= 2
                  ? "bg-c-lime-green text-c-dark-green hover:bg-c-darker-green"
                  : "bg-c-grey text-c-light-grey hover:bg-c-background",
              )}
              key={crypto.randomUUID()}
            >
              {crashPoint.toFixed(2).replace(".", ",")}X
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
