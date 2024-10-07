import { Form } from "@/components/Form";
import { freeBetStore } from "@/stores/free-bet.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { Button } from "../button";

export const Free = observer((): ReactElement => {
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
      <Button.Primary className="h-12 tracking-normal w-full" disabled={!freeBetStore.autoCrashout}>
        {freeBetStore.isAutoBets ? "Iniciar Auto-Aposta" : "Começar o jogo"}
      </Button.Primary>
      <div className="font-semibold uppercase">
        <span className="text-white text-[10px] mr-[3px] font-sofia-pro">5</span>
        <span className="text-c-light-grey text-[10px] font-sofia-pro">
          Rodadas grátis restantes
        </span>
      </div>
      <div className="border border-solid border-c-separator rounded h-12 p-[3px]">
        <div className="items-center bg-c-dark-background-four rounded flex h-full justify-between p-[14px]">
          <span className="text-white text-xs font-semibold uppercase font-sofia-pro leading-[1.33]">
            Valor Ganho
          </span>
          <div className="items-center flex gap-[3px]">
            <span className="text-white text-xs font-semibold uppercase font-sofia-pro leading-[1.33]">
              0,00
            </span>
            <span className="text-xs font-semibold uppercase text-c-light-grey font-sofia-pro leading-[1.33]">
              R$
            </span>
          </div>
        </div>
      </div>
    </>
  );
});
