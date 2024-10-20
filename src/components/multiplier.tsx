import { useDependencies } from "@/contexts/dependencies-context";
import { crashExtension } from "@/extensions/crash-extension";
import { cn } from "@/utils/cn";
import { toBRL } from "@/utils/currency";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

const MultiplierSuccessfully = observer((): ReactElement => {
  const { statusStore, displayStore } = useDependencies();

  return (
    <div
      className={cn(
        "text-center text-white uppercase font-medium h-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[120px] w-[180px] s-600px:h-[60px] s-600px:w-40",
        statusStore.isCrashed ? "-translate-y-[138px]" : "",
      )}
    >
      <div className="bg-c-lime-green rounded-t py-1">
        <span className="font-sofia-pro font-semibold">
          X{displayStore.multiplierOnWinning.toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-c-darker-green rounded-b w-full">
          <span className="font-roboto text-xs tracking-tight font-semibold">
            Você ganhou {toBRL(displayStore.earnedAmount)}
          </span>
        </div>
        <div className="border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-solid border-t-c-darker-green" />
      </div>
    </div>
  );
});

const MultiplierCrashed = observer((): ReactElement => {
  const { statusStore, displayStore } = useDependencies();

  return (
    <>
      {statusStore.isWinner && <MultiplierSuccessfully />}
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
    </>
  );
});

const MultiplierRunning = observer((): ReactElement => {
  const { displayStore, statusStore, crashHistoryStore, walletBalanceStore, controlPanelStore } =
    useDependencies();

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

    if (statusStore.isReadyToStart) statusStore.setIsPlaying(true);
  }, []);

  useEffect(() => {
    if (displayStore.multiplier >= displayStore.limit) {
      statusStore.setIsCrashed(true);
      statusStore.setIsPlaying(false);

      const currentCrashPoint = parseFloat(displayStore.multiplier.toFixed(2));

      crashHistoryStore.insert(currentCrashPoint);

      setTimeout(() => {
        displayStore.reset();

        statusStore.setIsCrashed(false);
        statusStore.setIsLoading(true);
        statusStore.setIsReadyToStart(false);

        if (statusStore.isInGameQueue && controlPanelStore.amount) {
          statusStore.setIsInGameQueue(false);
          statusStore.setIsReadyToStart(true);
          statusStore.setIsWaitingToStart(true);

          const lostAmount: number = parseFloat(controlPanelStore.amount.toFixed(2));

          walletBalanceStore.decrementWith(lostAmount);
        }
      }, 5000);
    }

    increasePow();

    const intervalId = setInterval(increaseCounter, 100);

    return (): void => clearInterval(intervalId);
  }, [displayStore.multiplier]);

  return (
    <>
      {statusStore.isWinner && <MultiplierSuccessfully />}
      <div className="items-center bg-c-background-three rounded flex h-20 justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] s-600px:h-[60px] s-600px:w-40">
        <span className="text-white text-[32px] font-roboto-mono font-bold">
          {displayStore.multiplier.toFixed(2).replace(".", ",")}X
        </span>
      </div>
    </>
  );
});

export const Multiplier = {
  Crashed: MultiplierCrashed,
  Running: MultiplierRunning,
};
