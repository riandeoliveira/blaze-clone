import { Form } from "@/components/Form";
import { autoBetStore } from "@/stores/auto-bet.store";
import { localStorageStore } from "@/stores/local-storage.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { Button } from "../button";

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
      <div className="flex gap-[10px] h-12">
        <div className="flex-1">
          <Form.NumberField
            label="Quantia"
            limit={localStorageStore.walletBalance}
            value={autoBetStore.amount}
            onValueChange={handleAmountChange}
            hasSuffix
          />
        </div>
        <button
          type="button"
          className="text-lg bg-transparent border border-solid border-c-separator rounded text-c-cloudy-blue cursor-pointer flex-[0.45] font-sofia-pro font-semibold transition-colors duration-500 hover:bg-c-background hover:text-white"
          onClick={handleHalfBet}
        >
          ½
        </button>
        <button
          type="button"
          className="text-xs bg-transparent border border-solid border-c-separator rounded text-c-cloudy-blue cursor-pointer flex-[0.45] font-sofia-pro font-semibold transition-colors duration-500 hover:bg-c-background hover:text-white"
          onClick={handleDoubleBet}
        >
          2x
        </button>
      </div>
      <div className="flex gap-[10px]">
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
      <Button.Primary className="h-12 tracking-normal w-full">Começar o jogo</Button.Primary>
    </>
  );
});
