import { crashGame } from "features/crash-game";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import styles from "./styles.module.scss";

export const LoadingBar = observer((): ReactElement => {
  const [timer, setTimer] = useState<number>(6.8);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0.01) setTimer(timer - 0.0125);
      else {
        setTimer(0);
        clearInterval(interval);

        crashGame.statusStore.setIsLoading(false);
      }
    }, 10);

    return (): void => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className={styles.container}>
      <div className={styles.progress_bar}>
        <span className={styles.label}>Começando em {timer.toFixed(1)}s</span>
      </div>
    </div>
  );
});
