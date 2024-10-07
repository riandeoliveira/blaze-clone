import { crashExtension } from "@/extensions/crash-extension";
import { displayStore } from "@/stores/display.store";
import { localStorageStore } from "@/stores/local-storage.store";
import { statusStore } from "@/stores/status.store";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";

export const Running = observer((): ReactElement => {
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

      localStorageStore.addToCrashHistory(currentCrashPoint);

      setTimeout(() => {
        displayStore.reset();
        statusStore.reset();
        statusStore.setIsLoading(true);
      }, 5000);
    }

    increasePow();

    const intervalID = setInterval(increaseCounter, 100);

    return (): void => clearInterval(intervalID);
  }, [displayStore.multiplier]);

  return (
    <div className="items-center bg-c-background-three rounded-lg flex h-20 justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] s-600px:h-[60px] s-600px:w-40">
      <span className="text-white font-roboto-mono text-[32px] font-bold">
        {displayStore.multiplier.toFixed(2).replace(".", ",")}X
      </span>
    </div>
  );
});
