import { makeAutoObservable } from "mobx";

interface IControlInput {
  amount: number | null;
  autoBets: boolean;
  autoCrashout: number | null;
  totalBets: number | null;
}

export type TabModeType = "normal" | "auto" | "free";

export class ControllerStore {
  public auto: Omit<IControlInput, "autoBets">;
  public free: Omit<IControlInput, "amount" | "totalBets">;
  public normal: Omit<IControlInput, "autoBets" | "totalBets">;
  public tabMode: TabModeType;

  public constructor() {
    this.auto = {
      amount: null,
      autoCrashout: null,
      totalBets: null,
    };
    this.free = {
      autoBets: false,
      autoCrashout: null,
    };
    this.normal = {
      amount: null,
      autoCrashout: null,
    };
    this.tabMode = "normal";

    makeAutoObservable(this);
  }

  public reset(): void {
    this.auto = {
      amount: null,
      autoCrashout: null,
      totalBets: null,
    };
    this.free = {
      autoBets: false,
      autoCrashout: null,
    };
    this.normal = {
      amount: null,
      autoCrashout: null,
    };
    this.tabMode = "normal";
  }

  public setTabMode(tabMode: TabModeType): void {
    this.tabMode = tabMode;
  }
}
