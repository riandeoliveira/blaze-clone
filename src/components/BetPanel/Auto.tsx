import { Form } from "components/Form";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { autoBetStore } from "stores/auto-bet.store";
import { localStorageStore } from "stores/local-storage.store";
import styles from "styles/components/BetPanel/Auto.module.scss";

export const Auto = observer((): ReactElement => {
  const handleAmountChange = ({ floatValue }: NumberFormatValues): void => {
    const value: number | undefined = floatValue === 0 ? 0.01 : floatValue;

    autoBetStore.setAmount(value);
  };

  const handleHalfBet = (): void => {
    if (autoBetStore.amount) {
      const halfBet: number = autoBetStore.amount / 2;

      if (halfBet >= 0.01) autoBetStore.setAmount(halfBet);
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

  const handleAutoCrashoutChange = ({ floatValue }: NumberFormatValues): void => {
    autoBetStore.setAutoCrashout(floatValue);
  };

  const handleTotalBetsChange = ({ floatValue }: NumberFormatValues): void => {
    autoBetStore.setTotalBets(floatValue);
  };

  return (
    <>
      <div className={styles.bet_panel_auto_area}>
        <div className={styles.number_field}>
          <Form.NumberField
            label="Quantia"
            limit={localStorageStore.walletBalance}
            value={autoBetStore.amount}
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
      <div className={styles.secondary_fields}>
        <Form.NumberField
          label="Auto Retirar"
          limit={9999}
          value={autoBetStore.autoCrashout}
          onValueChange={handleAutoCrashoutChange}
        />
        <Form.NumberField
          label="Total Apostas"
          limit={9999}
          value={autoBetStore.totalBets}
          onValueChange={handleTotalBetsChange}
        />
      </div>
      <button type="button" className={styles.button}>
        Começar o jogo
      </button>
    </>
  );
});
