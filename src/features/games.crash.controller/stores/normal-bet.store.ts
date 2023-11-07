import { makeAutoObservable } from "mobx";

export class NormalBetStore {
  public amount?: number;
  public autoCrashout?: number;

  public constructor() {
    this.amount = undefined;
    this.autoCrashout = undefined;

    makeAutoObservable(this);
  }

  public setAmount(amount?: number): void {
    this.amount = amount;
  }

  public setAutoCrashout(autoCrashout?: number): void {
    this.autoCrashout = autoCrashout;
  }
}

export const normalBetStore = new NormalBetStore();
