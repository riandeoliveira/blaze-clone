import { Form } from "components/Form";
import { normalBetStore } from "features/games.crash.controller/stores/normal-bet.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { localStorageStore } from "store/local-storage.store";
import styles from "./styles.module.scss";

export const NormalBetPanel = observer((): ReactElement => {
  const handleAmountChange = ({ floatValue }: NumberFormatValues): void => {
    const value: number | undefined = floatValue === 0 ? 0.01 : floatValue;

    normalBetStore.setAmount(value);
  };

  const handleHalfBet = (): void => {
    if (normalBetStore.amount) {
      const halfBet: number = normalBetStore.amount / 2;

      if (halfBet >= 0.01) normalBetStore.setAmount(halfBet);
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

  const handleAutoCrashoutChange = ({ floatValue }: NumberFormatValues): void => {
    normalBetStore.setAutoCrashout(floatValue);
  };

  return (
    <>
      <div className={styles.primary_fields}>
        <div className={styles.number_field}>
          <Form.NumberField
            label="Quantia"
            limit={localStorageStore.walletBalance}
            value={normalBetStore.amount}
            onValueChange={handleAmountChange}
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
      <Form.NumberField
        label="Auto Retirar"
        limit={9999}
        value={normalBetStore.autoCrashout}
        onValueChange={handleAutoCrashoutChange}
      />
      <button type="button" disabled={!normalBetStore.amount} className={styles.button}>
        Começar o jogo
      </button>
    </>
  );
});
