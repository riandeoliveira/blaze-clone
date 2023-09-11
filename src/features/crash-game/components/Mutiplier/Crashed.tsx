import { crashGameStore } from "features/crash-game/store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { Rect, Text } from "react-konva";

export const Crashed = observer((): ReactElement => {
  const { multiplier } = crashGameStore;

  return (
    <>
      <Rect x={250} y={140} width={180} height={80} fill="#f12c4c" cornerRadius={4} />
      <Rect x={250} y={217} width={180} height={40} fill="#c61834" cornerRadius={4} />
      <Text
        text={`${multiplier.toFixed(2).replace(".", ",")}X`}
        fill="#fff"
        fontFamily="Consolas"
        fontVariant="bold"
        fontSize={32}
        x={295}
        y={168}
      />
      <Text
        text="CRASHED"
        fill="#fff"
        fontFamily="SofiaPro"
        fontVariant="bold"
        fontSize={14}
        x={307}
        y={232}
      />
    </>
  );
});
