import { makeAutoObservable } from "mobx";

export class NormalBetStore {
  public amount: number | null;
  public autoCrashout: number | null;

  public constructor() {
    this.amount = null;
    this.autoCrashout = null;

    makeAutoObservable(this);
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public setAutoCrashout(autoCrashout: number): void {
    this.autoCrashout = autoCrashout;
  }
}

export const normalBetStore = new NormalBetStore();
