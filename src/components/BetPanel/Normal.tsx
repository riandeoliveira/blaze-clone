import { Form } from "components/Form";
import { localStorageExtension } from "extensions/local-storage-extension";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { normalBetStore } from "stores/normal-bet.store";
import styles from "styles/components/BetPanel/Normal.module.scss";

export const Normal = observer((): ReactElement => {
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

      if (doubleBet <= localStorageExtension.getWalletBalance()) {
        normalBetStore.setAmount(doubleBet);
      }
    }
  };

  const handleAutoCrashoutChange = ({ floatValue }: NumberFormatValues): void => {
    normalBetStore.setAutoCrashout(floatValue);
  };

  return (
    <>
      <div className={styles.bet_panel_normal_area}>
        <div className={styles.number_field}>
          <Form.NumberField
            label="Quantia"
            limit={localStorageExtension.getWalletBalance()}
            value={normalBetStore.amount}
            onValueChange={handleAmountChange}
            hasSuffix
            placeholderClassName={styles.amount}
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
