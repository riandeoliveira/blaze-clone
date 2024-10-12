import { autoBetStore } from "@/stores/auto-bet.store";
import { freeBetStore } from "@/stores/free-bet.store";
import { localStorageStore } from "@/stores/local-storage.store";
import { normalBetStore } from "@/stores/normal-bet.store";
import { tabStore } from "@/stores/tab.store";
import type { ParentComponentProps } from "@/types/components";
import type { TabModeType } from "@/types/tab";
import { cn } from "@/utils/cn";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { Button } from "./button";
import { Input } from "./input";

const ControlPanelAutoBet = observer((): ReactElement => {
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
          <Input.Numeric
            label="Quantia"
            limit={localStorageStore.walletBalance}
            value={autoBetStore.amount}
            onValueChange={handleAmountChange}
            hasSuffix
          />
        </div>
        <Button.Secondary onClick={handleHalfBet} className="text-lg">
          ½
        </Button.Secondary>
        <Button.Secondary onClick={handleDoubleBet} className="text-xs">
          2x
        </Button.Secondary>
      </div>
      <div className="flex gap-[10px]">
        <Input.Numeric
          label="Auto Retirar"
          limit={9999}
          value={autoBetStore.autoCrashout}
          onValueChange={handleAutoCrashoutChange}
        />
        <Input.Numeric
          label="Total Apostas"
          limit={9999}
          value={autoBetStore.totalBets}
          onValueChange={handleTotalBetsChange}
        />
      </div>
      <Button.Primary className="h-12 tracking-normal w-full">Iniciar Auto-Aposta</Button.Primary>
    </>
  );
});

const ControlPanelFreeBet = observer((): ReactElement => {
  const handleAutoBetsCheck = (): void => {
    freeBetStore.toggleAutoBets();
  };

  const handleAutoCrashoutChange = ({ floatValue }: NumberFormatValues): void => {
    freeBetStore.setAutoCrashout(floatValue);
  };

  return (
    <>
      <Input.Checkbox
        label="Apostas Automáticas"
        isChecked={freeBetStore.isAutoBets}
        onCheck={handleAutoBetsCheck}
      />
      <Input.Numeric
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

const ControlPanelNormalBet = observer((): ReactElement => {
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
          <Input.Numeric
            label="Quantia"
            limit={localStorageStore.walletBalance}
            value={normalBetStore.amount}
            onValueChange={handleAmountChange}
            hasSuffix
          />
        </div>
        <Button.Secondary onClick={handleHalfBet} className="text-lg">
          ½
        </Button.Secondary>
        <Button.Secondary onClick={handleDoubleBet} className="text-xs">
          2x
        </Button.Secondary>
      </div>
      <Input.Numeric
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

interface ControlPanelRootProps extends ParentComponentProps {}

const ControlPanelRoot = ({ children }: ControlPanelRootProps): ReactElement => {
  return (
    <div className="border-r border-solid border-c-separator flex flex-col gap-4 max-w-[325px] py-4 px-6 w-full s-1080px:border-0 s-1080px:max-w-none">
      {children}
    </div>
  );
};

interface ControlPanelTabProps extends ParentComponentProps<string> {
  mode: TabModeType;
}

const ControlPanelTab = observer(({ mode, children }: ControlPanelTabProps): ReactElement => {
  return (
    <button
      type="button"
      className={cn(
        "items-center bg-transparent rounded text-c-light-grey cursor-pointer flex flex-1 text-[10px] font-sofia-pro font-semibold justify-center text-center",
        tabStore.mode === mode ? "bg-c-background text-white" : "",
      )}
      onClick={(): void => tabStore.setMode(mode)}
    >
      {children}
    </button>
  );
});

interface ControlPanelTabsProps extends ParentComponentProps {}

const ControlPanelTabs = ({ children }: ControlPanelTabsProps): ReactElement => {
  return <div className="border border-solid border-c-separator flex h-12 p-[3px]">{children}</div>;
};

export const ControlPanel = {
  AutoBet: ControlPanelAutoBet,
  FreeBet: ControlPanelFreeBet,
  NormalBet: ControlPanelNormalBet,
  Root: ControlPanelRoot,
  Tab: ControlPanelTab,
  Tabs: ControlPanelTabs,
};
