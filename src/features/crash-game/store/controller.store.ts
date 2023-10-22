import { makeAutoObservable } from "mobx";

interface IControlInput {
  amount?: number | null;
  autoBets?: boolean;
  autoCrashout?: number | null;
  totalBets?: number | null;
}

export type TabModeType = "normal" | "auto" | "free";

type AutoType = Omit<IControlInput, "autoBets">;
type FreeType = Omit<IControlInput, "amount" | "totalBets">;
type NormalType = Omit<IControlInput, "autoBets" | "totalBets">;

export class ControllerStore {
  public auto: AutoType;
  public free: FreeType;
  public normal: NormalType;
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

  public updateAutoControl(property: keyof AutoType, value?: number | null): void {
    this.auto[property] = value;
  }

  public updatedFreeControl(property: keyof FreeType, value?: number | boolean | null): void {
    this.free[property] = value as never;
  }

  public updateNormalControl(property: keyof NormalType, value?: number | null): void {
    this.normal[property] = value;
  }
}
