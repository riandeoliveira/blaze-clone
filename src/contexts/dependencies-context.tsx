import type { IControlPanelStore } from "@/stores/control-panel-store";
import { ControlPanelStore } from "@/stores/control-panel-store";
import type { ICrashHistoryStore } from "@/stores/crash-history-store";
import { CrashHistoryStore } from "@/stores/crash-history-store";
import type { IDisplayStore } from "@/stores/display.store";
import { DisplayStore } from "@/stores/display.store";
import { StatusStore, type IStatusStore } from "@/stores/status-store";
import { TabStore, type ITabStore } from "@/stores/tab-store";
import type { IWalletBalanceStore } from "@/stores/wallet-balance-store";
import { WalletBalanceStore } from "@/stores/wallet-balance-store";
import type { ParentComponentProps } from "@/types/components";
import type { ReactElement } from "react";
import { createContext, useContext } from "react";

const controlPanelStore = new ControlPanelStore();
const crashHistoryStore = new CrashHistoryStore();
const displayStore = new DisplayStore();
const statusStore = new StatusStore();
const tabStore = new TabStore();
const walletBalanceStore = new WalletBalanceStore();

interface IDependenciesContext {
  controlPanelStore: IControlPanelStore;
  crashHistoryStore: ICrashHistoryStore;
  displayStore: IDisplayStore;
  statusStore: IStatusStore;
  tabStore: ITabStore;
  walletBalanceStore: IWalletBalanceStore;
}

const DependenciesContext = createContext<IDependenciesContext>({
  controlPanelStore,
  crashHistoryStore,
  displayStore,
  statusStore,
  tabStore,
  walletBalanceStore,
});

interface DependenciesContextProviderProps extends ParentComponentProps, IDependenciesContext {}

const DependenciesContextProvider = ({
  children,
  ...props
}: DependenciesContextProviderProps): ReactElement => {
  return (
    <DependenciesContext.Provider value={{ ...props }}>{children}</DependenciesContext.Provider>
  );
};

interface DependenciesProviderProps extends ParentComponentProps {}

export const DependenciesProvider = ({ children }: DependenciesProviderProps): ReactElement => {
  return (
    <DependenciesContextProvider
      controlPanelStore={controlPanelStore}
      crashHistoryStore={crashHistoryStore}
      displayStore={displayStore}
      statusStore={statusStore}
      tabStore={tabStore}
      walletBalanceStore={walletBalanceStore}
    >
      {children}
    </DependenciesContextProvider>
  );
};

export const useDependencies = (): IDependenciesContext => {
  const context = useContext(DependenciesContext) as IDependenciesContext;

  if (!context) {
    throw new Error("useDependencies must be used within a DependenciesProvider component");
  }

  return context;
};
