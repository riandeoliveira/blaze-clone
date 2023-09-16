import { useRocket } from "features/crash-game/hooks/useRocket";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { Image, Rect } from "react-konva";
import useImage from "use-image";

export const Rocket = observer((): ReactElement => {
  const [image] = useImage("/crash-rocket.svg");
  const { rocketY } = useRocket();

  return (
    <>
      <Image image={image} x={640} y={rocketY} />
      <Rect x={654} y={rocketY + 35} width={5} height={360 - rocketY} fill="#f12c4c" />
    </>
  );
});
