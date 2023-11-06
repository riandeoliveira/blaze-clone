import { crashGame } from "features/crash-game";
import { useMultiplier } from "features/crash-game/hooks/useMultiplier";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import styles from "./styles.module.scss";

export const RunningMultiplier = observer((): ReactElement => {
  useMultiplier();

  return (
    <div className={styles.container}>
      <span className={styles.multiplier}>
        {crashGame.displayStore.multiplier.toFixed(2).replace(".", ",")}X
      </span>
    </div>
  );
});
