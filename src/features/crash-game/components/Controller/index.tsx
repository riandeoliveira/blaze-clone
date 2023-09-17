import { crashGame } from "features/crash-game";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { AmountEarned } from "../AmountEarned";
import { Checkbox } from "../Checkbox";
import { NumberField } from "../NumberField";
import { Tab } from "../Tab";
import styles from "./styles.module.scss";

export const Controller = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.tab_container}>
        <Tab mode="normal">Normal</Tab>
        <Tab mode="auto">Auto</Tab>
        <Tab mode="free">Rodadas Grátis</Tab>
      </div>
      {crashGame.store.tabMode !== "free" ? (
        <div className={styles.primary_fields}>
          <div className={styles.number_field}>
            <NumberField label="Quantia" />
          </div>
          <button type="button" className={styles.half}>
            ½
          </button>
          <button type="button" className={styles.double}>
            2x
          </button>
        </div>
      ) : (
        <>
          <Checkbox label="Apostas Automáticas" />
        </>
      )}
      {crashGame.store.tabMode === "auto" ? (
        <>
          <div className={styles.secondary_fields}>
            <NumberField label="Auto Retirar" />
            <NumberField label="Total Apostas" />
          </div>
          <button type="button" className={styles.button}>
            Iniciar Auto-Aposta
          </button>
        </>
      ) : (
        <>
          <NumberField label="Auto Retirar" />
          <button type="button" className={styles.button}>
            Começar o jogo
          </button>
        </>
      )}
      {crashGame.store.tabMode === "free" ? (
        <>
          <div className={styles.free_rounds}>
            <span className={styles.free_rounds_value}>5</span>
            <span className={styles.free_rounds_label}>Rodadas grátis restantes</span>
          </div>
          <AmountEarned />
        </>
      ) : null}
    </div>
  );
});
