import { useLoadingBar } from "features/crash-game/hooks/useLoadingBar";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { Rect, Text } from "react-konva";

export const LoadingBar = observer((): ReactElement => {
  const { progressBarWidth, counter } = useLoadingBar();

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
