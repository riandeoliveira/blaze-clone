import { statusStore } from "@/stores/status.store";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";

export const LoadingBar = observer((): ReactElement => {
  const [timer, setTimer] = useState<number>(6.0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0.1) {
        setTimer(timer - 0.0125);

        return;
      }

      setTimer(0);
      clearInterval(interval);

      statusStore.setIsLoading(false);
    }, 10);

    return (): void => clearInterval(interval);
  }, [timer]);

  return (
    <div className="bg-c-background-three rounded flex flex-col h-10 justify-center absolute left-1/2 max-w-[600px] p-2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
      <div className="animate-load bg-c-red rounded h-full">
        <span className="text-white font-roboto-mono text-xs font-medium absolute left-1/2 text-center top-1/2 -translate-x-1/2 -translate-y-1/2">
          Começando em {timer.toFixed(1)}s
        </span>
      </div>
    </div>
  );
});
