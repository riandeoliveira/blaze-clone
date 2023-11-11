import { crashExtension } from "extensions/crash-extension";
import { localStorageExtension } from "extensions/local-storage-extension";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import { displayStore } from "stores/display.store";
import { statusStore } from "stores/status.store";
import styles from "styles/components/Multiplier/Running.module.scss";

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

      localStorageExtension.addToCrashHistory(currentCrashPoint);

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
    <div className={styles.multiplier_running_area}>
      <span className={styles.multiplier}>
        {displayStore.multiplier.toFixed(2).replace(".", ",")}X
      </span>
    </div>
  );
});
