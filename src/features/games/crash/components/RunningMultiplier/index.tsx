import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { crashGame } from "../..";
import { useMultiplier } from "../../hooks/useMultiplier";
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
