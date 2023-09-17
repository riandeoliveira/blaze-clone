import { crashGame } from "features/crash-game";
import { useMultiplier } from "features/crash-game/hooks/useMultiplier";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { Rect, Text } from "react-konva";

export const Running = observer((): ReactElement => {
  useMultiplier();

  return (
    <>
      <Rect x={250} y={150} width={180} height={80} fill="#1b2430" cornerRadius={4} />
      <Text
        text={`${crashGame.store.multiplier.toFixed(2).replace(".", ",")}X`}
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
