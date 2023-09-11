import { crashGameStore } from "features/crash-game/store";
import { crashGameTool } from "features/crash-game/tools";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import { Rect, Text } from "react-konva";

export const Running = observer((): ReactElement => {
  const [multiplierPow, setMultiplierPow] = useState(0.5);

  const { multiplier } = crashGameStore;

  useEffect(() => {
    const multiplierLimit: number = crashGameTool.generateCrashPoint();

    crashGameStore.setLimit(multiplierLimit);
  }, []);

  useEffect(() => {
    if (crashGameStore.multiplier >= crashGameStore.limit) {
      crashGameStore.setIsCrashed(true);

      setTimeout(() => {
        crashGameStore.reset();
        crashGameStore.setIsLoading(true);
      }, 5000);
    }

    setMultiplierPow((previousMultiplierPow) => {
      return previousMultiplierPow + 0.01;
    });

    const intervalID = setInterval(() => {
      crashGameStore.setMultiplier(multiplier + 0.01 * multiplierPow);
    }, 100);

    return (): void => clearInterval(intervalID);
  }, [multiplier]);

  return (
    <>
      <Rect x={250} y={150} width={180} height={80} fill="#1b2430" cornerRadius={4} />
      <Text
        text={`${multiplier.toFixed(2).replace(".", ",")}X`}
        fill="#fff"
        fontFamily="Consolas"
        fontVariant="bold"
        fontSize={32}
        x={295}
        y={178}
      />
    </>
  );
});
