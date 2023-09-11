import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import { Rect, Text } from "react-konva";

export const LoadingBar = observer((): ReactElement => {
  const [progressBarWidth, setProgressBarWidth] = useState(663);
  const [counter, setCounter] = useState({ seconds: 6, milliseconds: 8 });

  useEffect(() => {
    const startTime = performance.now();
    let animationFrameID: number;

    const updateProgressBar = (): void => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const remainingTime = Math.max(0, 6000 - elapsedTime);
      const newProgressBarWidth = (remainingTime / 6000) * 663;

      setProgressBarWidth(newProgressBarWidth);
      const formattedMilliseconds = Math.floor((remainingTime % 1000) / 100) * 100;
      setCounter({
        seconds: Math.floor(remainingTime / 1000),
        milliseconds: formattedMilliseconds,
      });

      if (remainingTime > 0) {
        animationFrameID = requestAnimationFrame(updateProgressBar);
      }
    };

    updateProgressBar();

    return () => {
      if (animationFrameID) {
        cancelAnimationFrame(animationFrameID);
      }
    };
  }, []);

  return (
    <>
      <Rect x={0} y={170} width={679} height={40} fill="#1b2430" cornerRadius={4} />
      <Rect x={8} y={178} width={progressBarWidth} height={25} fill="#f12c4c" cornerRadius={4} />
      <Text
        text={`Começando em ${counter.seconds}.${counter.milliseconds / 100}s`}
        fill="#fff"
        fontFamily="Consolas"
        fontVariant="bold"
        fontSize={14}
        x={273}
        y={185}
      />
    </>
  );
});
