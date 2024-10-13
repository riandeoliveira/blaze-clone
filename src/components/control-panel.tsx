import { useDependencies } from "@/contexts/dependencies-context";
import type { TabModeKey } from "@/stores/tab-store";
import type { ParentComponentProps } from "@/types/components";
import { cn } from "@/utils/cn";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import type { NumberFormatValues } from "react-number-format";
import { Button } from "./button";
import { Input } from "./input";

const ControlPanelAutoBet = observer((): ReactElement => {
  const { controlPanelStore, walletBalanceStore } = useDependencies();
  const { handleAmountChange, handleHalfBet, handleDoubleBet } = useControlPanel();

  return (
    <>
      <div className="flex gap-[10px] h-12">
        <div className="flex-1">
          <Input.Numeric
            label="Quantia"
            limit={walletBalanceStore.amount}
            value={controlPanelStore.amount}
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
          value={controlPanelStore.autoCrashOut}
          onValueChange={({ floatValue }) => controlPanelStore.setAutoCrashOut(floatValue)}
        />
        <Input.Numeric
          label="Total Apostas"
          limit={9999}
          value={controlPanelStore.totalBets}
          onValueChange={({ floatValue }) => controlPanelStore.setTotalBets(floatValue)}
        />
      </div>
      <Button.Primary className="h-12 tracking-normal w-full">Iniciar Auto-Aposta</Button.Primary>
    </>
  );
});

const ControlPanelFreeBet = observer((): ReactElement => {
  const { controlPanelStore } = useDependencies();

  return (
    <>
      <Input.Checkbox
        label="Apostas Automáticas"
        isChecked={controlPanelStore.isAutoBets}
        onCheck={() => controlPanelStore.toggleAutoBets()}
      />
      <Input.Numeric
        label="Auto Retirar"
        limit={9999}
        value={controlPanelStore.autoCrashOut}
        onValueChange={({ floatValue }) => controlPanelStore.setAutoCrashOut(floatValue)}
      />
      <Button.Primary
        className="h-12 tracking-normal w-full"
        disabled={!controlPanelStore.autoCrashOut}
      >
        {controlPanelStore.isAutoBets ? "Iniciar Auto-Aposta" : "Começar o jogo"}
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
  const { walletBalanceStore, controlPanelStore } = useDependencies();
  const { handleAmountChange, handleHalfBet, handleDoubleBet } = useControlPanel();

  return (
    <>
      <div className="flex gap-[10px] h-12">
        <div className="flex-1">
          <Input.Numeric
            label="Quantia"
            limit={walletBalanceStore.amount}
            value={controlPanelStore.amount}
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
        value={controlPanelStore.autoCrashOut}
        onValueChange={({ floatValue }) => controlPanelStore.setAutoCrashOut(floatValue)}
      />
      <Button.Primary disabled={!controlPanelStore.amount} className="h-12 tracking-normal w-full">
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
  mode: TabModeKey;
}

const ControlPanelTab = observer(({ mode, children }: ControlPanelTabProps): ReactElement => {
  const { controlPanelStore, tabStore } = useDependencies();

  const handleTabChange = (): void => {
    controlPanelStore.reset();
    tabStore.setMode(mode);
  };

  return (
    <button
      type="button"
      className={cn(
        "items-center bg-transparent rounded text-c-light-grey cursor-pointer flex flex-1 text-[10px] font-sofia-pro font-semibold justify-center text-center",
        tabStore.mode === mode ? "bg-c-background text-white" : "",
      )}
      onClick={handleTabChange}
    >
      {children}
    </button>
  );
});

interface ControlPanelTabsProps extends ParentComponentProps {}

const ControlPanelTabs = ({ children }: ControlPanelTabsProps): ReactElement => {
  return <div className="border border-solid border-c-separator flex h-12 p-[3px]">{children}</div>;
};

interface UseControlPanelReturnType {
  handleAmountChange: ({ floatValue }: NumberFormatValues) => void;
  handleDoubleBet: () => void;
  handleHalfBet: () => void;
}

const useControlPanel = (): UseControlPanelReturnType => {
  const { controlPanelStore, walletBalanceStore } = useDependencies();

  const handleAmountChange = ({ floatValue }: NumberFormatValues): void => {
    const value: number | undefined = floatValue === 0 ? 0.01 : floatValue;

    controlPanelStore.setAmount(value);
  };

  const handleDoubleBet = (): void => {
    if (controlPanelStore.amount) {
      const doubleBet: number = controlPanelStore.amount * 2;

      if (doubleBet <= walletBalanceStore.amount) {
        controlPanelStore.setAmount(doubleBet);

        return;
      }

      controlPanelStore.setAmount(walletBalanceStore.amount);
    }
  };

  const handleHalfBet = (): void => {
    if (controlPanelStore.amount) {
      const halfBet: number = controlPanelStore.amount / 2;

      if (halfBet >= 0.01) controlPanelStore.setAmount(halfBet);
    }
  };

  return {
    handleAmountChange,
    handleDoubleBet,
    handleHalfBet,
  };
};

export const ControlPanel = {
  AutoBet: ControlPanelAutoBet,
  FreeBet: ControlPanelFreeBet,
  NormalBet: ControlPanelNormalBet,
  Root: ControlPanelRoot,
  Tab: ControlPanelTab,
  Tabs: ControlPanelTabs,
};
