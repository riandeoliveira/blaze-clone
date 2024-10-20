import { makeAutoObservable } from "mobx";

export interface IControlPanelStore {
  amount?: number;
  autoCrashOut?: number;
  isAutoBets: boolean;
  totalBets?: number;

  reset(): void;
  setAmount(amount?: number): void;
  setAutoCrashOut(autoCrashOut?: number): void;
  setTotalBets(totalBets?: number): void;
  toggleAutoBets(): void;
}

export class ControlPanelStore implements IControlPanelStore {
  public amount?: number = undefined;
  public autoCrashOut?: number = undefined;
  public isAutoBets: boolean = false;
  public totalBets?: number = undefined;

  public constructor() {
    makeAutoObservable(this);
  }

  private setIsAutoBets(isAutoBets: boolean): void {
    this.isAutoBets = isAutoBets;
  }

  public reset(): void {
    this.setAmount(undefined);
    this.setAutoCrashOut(undefined);
    this.setIsAutoBets(false);
    this.setTotalBets(undefined);
  }

  public setAmount(amount?: number | undefined): void {
    this.amount = amount;
  }

  public setAutoCrashOut(autoCrashOut?: number | undefined): void {
    this.autoCrashOut = autoCrashOut;
  }

  public setTotalBets(totalBets?: number | undefined): void {
    this.totalBets = totalBets;
  }

  public toggleAutoBets(): void {
    this.setIsAutoBets(!this.isAutoBets);
  }
}

// export const useControlPanelStore = (): IControlPanelStore => {
//   const [amount, setAmount] = useState<number | undefined>(undefined);
//   const [autoCrashOut, setAutoCrashOut] = useState<number | undefined>(undefined);
//   const [isAutoBets, setIsAutoBets] = useState<boolean>(false);
//   const [totalBets, setTotalBets] = useState<number | undefined>(undefined);

//   const reset = (): void => {
//     setAmount(undefined);
//     setAutoCrashOut(undefined);
//     setIsAutoBets(false);
//     setTotalBets(undefined);
//   };

//   const toggleAutoBets = (): void => {
//     setIsAutoBets((previousState) => !previousState);
//   };

//   return {
//     amount,
//     autoCrashOut,
//     isAutoBets,
//     totalBets,

//     reset,
//     setAmount,
//     setAutoCrashOut,
//     setTotalBets,
//     toggleAutoBets,
//   };
// };
