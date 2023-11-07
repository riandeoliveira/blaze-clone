import { Form } from "components/Form";
import { normalBetStore } from "features/games.crash.controller/stores/normal-bet.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { localStorageStore } from "store/local-storage.store";
import styles from "./styles.module.scss";

export const NormalBetPanel = observer((): ReactElement => {
  const handleChangeAmount = (values: NumberFormatValues): void => {
    const { floatValue } = values;

    if (floatValue) {
      const value = floatValue === 0 ? 0.01 : floatValue;

      normalBetStore.setAmount(value);
    }
  };

  const handleHalfBet = (): void => {
    if (normalBetStore.amount) {
      const doubleBet: number = normalBetStore.amount / 2;

      normalBetStore.setAmount(doubleBet);
    }
  };

  const handleDoubleBet = (): void => {
    if (normalBetStore.amount) {
      const doubleBet: number = normalBetStore.amount * 2;

      if (doubleBet <= localStorageStore.walletBalance) {
        normalBetStore.setAmount(doubleBet);
      }
    }
  };

  return (
    <>
      <div className={styles.primary_fields}>
        <div className={styles.number_field}>
          <Form.NumberField
            label="Quantia"
            limit={localStorageStore.walletBalance}
            value={normalBetStore.amount}
            onChange={handleChangeAmount}
            hasSuffix
          />
        </div>
        <button type="button" className={styles.half} onClick={handleHalfBet}>
          ½
        </button>
        <button type="button" className={styles.double} onClick={handleDoubleBet}>
          2x
        </button>
      </div>
      <Form.NumberField label="Auto Retirar" onChange={(): void => {}} />
      <button type="button" disabled={!normalBetStore.amount} className={styles.button}>
        Começar o jogo
      </button>
    </>
  );
});
