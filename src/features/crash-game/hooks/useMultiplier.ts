import { useEffect, useState } from "react";
import { crashGame } from "..";

const initialMultiplierPow: number = 0.5;
const increaserValue: number = 0.01;
const millisecondsInterval: number = 100;

export const useMultiplier = (): void => {
  const [multiplierPow, setMultiplierPow] = useState(initialMultiplierPow);

  const increasePow = (): void => {
    setMultiplierPow((previousMultiplierPow) => previousMultiplierPow + increaserValue);
  };

  const increaseCounter = (): void => {
    crashGame.store.setMultiplier(crashGame.store.multiplier + increaserValue * multiplierPow);
  };

  useEffect(() => crashGame.setCrashPoint(), []);

  useEffect(() => {
    if (crashGame.checkIfCanCrash()) crashGame.crash();

    increasePow();

    const intervalID = setInterval(increaseCounter, millisecondsInterval);

    return (): void => clearInterval(intervalID);
  }, [crashGame.store.multiplier]);
};
