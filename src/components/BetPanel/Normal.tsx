import { Form } from "@/components/Form";
import { localStorageStore } from "@/stores/local-storage.store";
import { normalBetStore } from "@/stores/normal-bet.store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { Button } from "../button";

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
      <div className="flex gap-[10px] h-12">
        <div className="flex-1">
          <Form.NumberField
            label="Quantia"
            limit={localStorageStore.walletBalance}
            value={normalBetStore.amount}
            onValueChange={handleAmountChange}
            hasSuffix
          />
        </div>
        <button
          type="button"
          className="bg-transparent border border-solid border-c-separator rounded text-c-cloudy-blue cursor-pointer flex-[0.45] font-sofia-pro font-semibold transition-colors duration-500 hover:bg-c-background hover:text-white text-lg"
          onClick={handleHalfBet}
        >
          ½
        </button>
        <button
          type="button"
          className="bg-transparent border border-solid border-c-separator rounded text-c-cloudy-blue cursor-pointer flex-[0.45] font-sofia-pro font-semibold transition-colors duration-500 hover:bg-c-background hover:text-white text-xs"
          onClick={handleDoubleBet}
        >
          2x
        </button>
      </div>
      <Form.NumberField
        label="Auto Retirar"
        limit={9999}
        value={normalBetStore.autoCrashout}
        onValueChange={handleAutoCrashoutChange}
      />
      <Button.Primary disabled={!normalBetStore.amount} className="h-12 tracking-normal w-full">
        Começar o jogo
      </Button.Primary>
    </>
  );
});
