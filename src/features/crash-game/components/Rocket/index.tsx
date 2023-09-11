import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { Image, Rect } from "react-konva";
import useImage from "use-image";

export const Rocket = observer((): ReactElement => {
  const [image] = useImage("/crash-rocket.svg");
  const [rocketY, setRocketY] = useState(360);
  const targetY: number = 0;
  const duration: number = 5000;

  useEffect(() => {
    const startTime: number = performance.now();

    const animateRocket = (): void => {
      const currentTime: number = performance.now();
      const elapsedTime: number = currentTime - startTime;

      if (elapsedTime < duration) {
        const newY: number = rocketY - (rocketY - targetY) * (elapsedTime / duration);

        setRocketY(newY);
        requestAnimationFrame(animateRocket);
      } else {
        setRocketY(targetY);
      }
    };

    animateRocket();
  }, []);

  return (
    <>
      <Image image={image} x={640} y={rocketY} />
      <Rect x={654} y={rocketY + 35} width={5} height={360 - rocketY} fill="#f12c4c" />
    </>
  );
});
