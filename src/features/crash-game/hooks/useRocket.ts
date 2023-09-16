import { useEffect, useState } from "react";
import { crashGame } from "..";

export const useRocket = () => {
  const [rocketY, setRocketY] = useState(360);
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);

  const targetY: number = 0;
  const duration: number = 5000;

  useEffect(() => {
    const startTime: number = performance.now();

    let animationFrameID: number;

    const animateRocket = (): void => {
      const currentTime: number = performance.now();
      const elapsedTime: number = currentTime - startTime;

      if (isAnimationRunning && elapsedTime < duration && rocketY > targetY) {
        const newY: number = rocketY - (rocketY - targetY) * (elapsedTime / duration);

        setRocketY(newY);

        animationFrameID = requestAnimationFrame(animateRocket);
      }
    };

    animateRocket();

    return () => {
      if (animationFrameID) {
        cancelAnimationFrame(animationFrameID);
      }
    };
  }, [isAnimationRunning]);

  useEffect(() => {
    if (crashGame.store.isCrashed) {
      stopAnimation();
    }
  }, [crashGame.store.isCrashed]);

  const stopAnimation = () => {
    setIsAnimationRunning(false);
  };

  return {
    rocketY,
  };
};
