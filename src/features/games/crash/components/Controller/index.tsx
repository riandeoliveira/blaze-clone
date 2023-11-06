import { crashGame } from "features/crash-game";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
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
      {crashGame.controllerStore.tabMode === "normal" ? (
        <>
          <div className={styles.primary_fields}>
            <div className={styles.number_field}>
              <NumberField
                label="Quantia"
                limit={crashGame.localStorageStore.walletBalance}
                value={crashGame.controllerStore.normal.amount}
                onChange={({ floatValue }): void => {
                  const value = floatValue === 0 ? 0.01 : floatValue;

                  crashGame.controllerStore.updateNormalControl("amount", value);
                }}
                hasSuffix
              />
            </div>
            <button
              type="button"
              className={styles.half}
              onClick={(): void => {
                const value = crashGame.controllerStore.normal.amount;

                if (value) {
                  const doubleBet = crashGame.handleHalfBet(value);
                  crashGame.controllerStore.updateNormalControl("amount", doubleBet);
                }
              }}
            >
              ½
            </button>
            <button
              type="button"
              className={styles.double}
              onClick={(): void => {
                const value = crashGame.controllerStore.normal.amount;

                if (value) {
                  const doubleBet = crashGame.handleDoubleBet(value);

                  if (doubleBet <= crashGame.localStorageStore.walletBalance) {
                    crashGame.controllerStore.updateNormalControl("amount", doubleBet);
                  }
                }
              }}
            >
              2x
            </button>
          </div>
          <NumberField label="Auto Retirar" />
          <button
            type="button"
            disabled={!crashGame.controllerStore.normal.amount}
            className={styles.button}
          >
            Começar o jogo
          </button>
        </>
      ) : null}
      {crashGame.controllerStore.tabMode === "auto" ? (
        <>
          <div className={styles.primary_fields}>
            <div className={styles.number_field}>
              <NumberField
                label="Quantia"
                limit={crashGame.localStorageStore.walletBalance}
                value={crashGame.controllerStore.auto.amount}
                onChange={({ floatValue }): void => {
                  const value = floatValue === 0 ? 0.01 : floatValue;

                  crashGame.controllerStore.updateAutoControl("amount", value);
                }}
                hasSuffix
              />
            </div>
            <button
              type="button"
              className={styles.half}
              onClick={(): void => {
                const value = crashGame.controllerStore.auto.amount;

                if (value) {
                  const doubleBet = crashGame.handleHalfBet(value);
                  crashGame.controllerStore.updateAutoControl("amount", doubleBet);
                }
              }}
            >
              ½
            </button>
            <button
              type="button"
              className={styles.double}
              onClick={(): void => {
                const value = crashGame.controllerStore.auto.amount;

                if (value) {
                  const doubleBet = crashGame.handleDoubleBet(value);

                  if (doubleBet <= crashGame.localStorageStore.walletBalance) {
                    crashGame.controllerStore.updateAutoControl("amount", doubleBet);
                  }
                }
              }}
            >
              2x
            </button>
          </div>
          <div className={styles.secondary_fields}>
            <NumberField label="Auto Retirar" />
            <NumberField label="Total Apostas" />
          </div>
          <button type="button" className={styles.button}>
            Começar o jogo
          </button>
        </>
      ) : null}
      {crashGame.controllerStore.tabMode === "free" ? (
        <>
          <Checkbox label="Apostas Automáticas" />
          <NumberField label="Auto Retirar" />
          <button type="button" className={styles.button}>
            Começar o jogo
          </button>
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
