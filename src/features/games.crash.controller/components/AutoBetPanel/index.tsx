import { Form } from "components/Form";
import { autoBetStore } from "features/games.crash.controller/stores/auto-bet.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { localStorageStore } from "store/local-storage.store";
import styles from "./styles.module.scss";

export const AutoBetPanel = observer((): ReactElement => {
  const handleChangeAmount = (values: NumberFormatValues): void => {
    const { floatValue } = values;

    if (floatValue) {
      const value = floatValue === 0 ? 0.01 : floatValue;

      autoBetStore.setAmount(value);
    }
  };

  const handleHalfBet = (): void => {
    if (autoBetStore.amount) {
      const doubleBet: number = autoBetStore.amount / 2;

      autoBetStore.setAmount(doubleBet);
    }
  };

  const handleDoubleBet = (): void => {
    if (autoBetStore.amount) {
      const doubleBet: number = autoBetStore.amount * 2;

      if (doubleBet <= localStorageStore.walletBalance) {
        autoBetStore.setAmount(doubleBet);
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
            value={autoBetStore.amount}
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
      <div className={styles.secondary_fields}>
        <Form.NumberField label="Auto Retirar" onChange={(): void => {}} />
        <Form.NumberField label="Total Apostas" onChange={(): void => {}} />
      </div>
      <button type="button" className={styles.button}>
        Começar o jogo
      </button>
    </>
  );
});
