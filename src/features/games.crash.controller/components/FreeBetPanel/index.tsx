import { Form } from "components/Form";
import { freeBetStore } from "features/games.crash.controller/stores/free-bet.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import styles from "./styles.module.scss";

export const FreeBetPanel = observer((): ReactElement => {
  const handleAutoBetsCheck = (): void => {
    freeBetStore.toggleAutoBets();
  };

  const handleAutoCrashoutChange = ({ floatValue }: NumberFormatValues): void => {
    freeBetStore.setAutoCrashout(floatValue);
  };

  return (
    <>
      <Form.Checkbox
        label="Apostas Automáticas"
        checked={freeBetStore.isAutoBets}
        onCheck={handleAutoBetsCheck}
      />
      <Form.NumberField
        label="Auto Retirar"
        limit={9999}
        value={freeBetStore.autoCrashout}
        onValueChange={handleAutoCrashoutChange}
      />
      <button type="button" className={styles.button} disabled={!freeBetStore.autoCrashout}>
        {freeBetStore.isAutoBets ? "Iniciar Auto-Aposta" : "Começar o jogo"}
      </button>
      <div className={styles.free_rounds}>
        <span className={styles.free_rounds_value}>5</span>
        <span className={styles.free_rounds_label}>Rodadas grátis restantes</span>
      </div>
      <div className={styles.container}>
        <div className={styles.earned}>
          <span className={styles.label}>Valor Ganho</span>
          <div className={styles.amount_container}>
            <span className={styles.label}>0,00</span>
            <span className={styles.currency}>R$</span>
          </div>
        </div>
      </div>
    </>
  );
});
