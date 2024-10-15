import { useDependencies } from "@/contexts/dependencies-context";
import { crashExtension } from "@/extensions/crash-extension";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

const MultiplierCrashed = observer((): ReactElement => {
  const { displayStore } = useDependencies();

  return (
    <div className="flex flex-col absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2">
      <div className="items-center bg-c-red rounded-t flex h-20 justify-center w-[180px] s-600px:h-[60px] s-600px:w-40">
        <span className="text-white font-roboto-mono text-[32px] font-bold">
          {displayStore.multiplier.toFixed(2).replace(".", ",")}X
        </span>
      </div>
      <div className="items-center bg-c-dark-red-2 rounded-b text-white flex h-10 justify-center">
        <span className="font-sofia-pro uppercase">Crashed</span>
      </div>
    </div>
  );
});

const MultiplierRunning = observer((): ReactElement => {
  const { displayStore, statusStore, crashHistoryStore } = useDependencies();

  const [multiplierPow, setMultiplierPow] = useState<number>(0.5);

  const increasePow = (): void => {
    setMultiplierPow((previousMultiplierPow) => previousMultiplierPow + 0.01);
  };

  const increaseCounter = (): void => {
    const previousMultiplier: number = displayStore.multiplier;
    const nextMultiplier: number = previousMultiplier + 0.01 * multiplierPow;

    displayStore.setMultiplier(nextMultiplier);
  };

  useEffect(() => {
    const crashPoint: number = crashExtension.generateCrashPoint();

    displayStore.setLimit(crashPoint);
  }, []);

  useEffect(() => {
    if (displayStore.multiplier >= displayStore.limit) {
      statusStore.setIsCrashed(true);

      const currentCrashPoint = Number(displayStore.multiplier.toFixed(2));

      crashHistoryStore.insert(currentCrashPoint);

      setTimeout(() => {
        displayStore.reset();
        statusStore.reset();
        statusStore.setIsLoading(true);
      }, 5000);
    }

    increasePow();

    const intervalId = setInterval(increaseCounter, 100);

    return (): void => clearInterval(intervalId);
  }, [displayStore.multiplier]);

  return (
    <div className="items-center bg-c-background-three rounded-lg flex h-20 justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] s-600px:h-[60px] s-600px:w-40">
      <span className="text-white text-[32px] font-roboto-mono font-bold">
        {displayStore.multiplier.toFixed(2).replace(".", ",")}X
      </span>
    </div>
  );
});

export const Multiplier = {
  Crashed: MultiplierCrashed,
  Running: MultiplierRunning,
};
