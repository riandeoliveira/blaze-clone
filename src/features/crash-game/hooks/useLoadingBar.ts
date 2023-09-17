import { useEffect, useState } from "react";
import { crashGame } from "..";

export const useLoadingBar = () => {
  const [counter, setCounter] = useState({ seconds: 6, milliseconds: 8 });
  const [progressBarWidth, setProgressBarWidth] = useState(663);

  const checkIfCanStopLoading = (): boolean => {
    return counter.seconds === 0 && counter.milliseconds === 0;
  };

  useEffect(() => {
    const startTime = performance.now();
    let animationFrameID: number;

    const updateProgressBar = (): void => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const remainingTime = Math.max(0, 6000 - elapsedTime);
      const newProgressBarWidth = (remainingTime / 6000) * 663;

      setProgressBarWidth(newProgressBarWidth);

      const formattedSeconds = Math.floor(remainingTime / 1000);
      const formattedMilliseconds = Math.floor((remainingTime % 1000) / 100) * 100;

      setCounter({
        seconds: formattedSeconds,
        milliseconds: formattedMilliseconds,
      });

      if (remainingTime > 0) {
        animationFrameID = requestAnimationFrame(updateProgressBar);
      }
    };

    updateProgressBar();

    return (): void => {
      if (animationFrameID) {
        cancelAnimationFrame(animationFrameID);
      }
    };
  }, []);

  useEffect(() => {
    if (checkIfCanStopLoading()) {
      crashGame.statusStore.setIsLoading(false);
    }
  }, [counter]);

  return {
    counter,
    progressBarWidth,
  };
};
