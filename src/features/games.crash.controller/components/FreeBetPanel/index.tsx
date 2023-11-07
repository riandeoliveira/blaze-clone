import { Form } from "components/Form";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const FreeBetPanel = observer((): ReactElement => {
  return (
    <>
      <Form.Checkbox label="Apostas Automáticas" />
      <Form.NumberField label="Auto Retirar" onChange={(): void => {}} />
      <button type="button" className={styles.button}>
        Começar o jogo
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
