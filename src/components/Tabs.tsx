import { tabStore } from "@/stores/tab.store";
import type { TabModeType } from "@/types/tab";
import { cn } from "@/utils/cn";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";

interface TabData {
  label: string;
  mode: TabModeType;
}

interface TabsProps {
  data: TabData[];
}

export const Tabs = observer(({ data }: TabsProps): ReactElement => {
  return (
    <div className="border border-solid border-c-separator flex h-12 p-[3px]">
      {data.map(({ label, mode }) => (
        <button
          type="button"
          className={cn(
            "items-center bg-transparent rounded text-c-light-grey cursor-pointer flex flex-1 text-[10px] font-sofia-pro font-semibold justify-center text-center",
            tabStore.mode === mode ? "bg-c-background text-white" : "",
          )}
          onClick={(): void => tabStore.setMode(mode)}
          key={crypto.randomUUID()}
        >
          {label}
        </button>
      ))}
    </div>
  );
});
