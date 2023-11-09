import { makeAutoObservable } from "mobx";

export class AutoBetStore {
  public amount?: number;
  public autoCrashout?: number;
  public totalBets?: number;

  public constructor() {
    this.amount = undefined;
    this.autoCrashout = undefined;
    this.totalBets = undefined;

    makeAutoObservable(this);
  }

  public setAmount(amount?: number): void {
    this.amount = amount;
  }

  public setAutoCrashout(autoCrashout?: number): void {
    this.autoCrashout = autoCrashout;
  }

  public setTotalBets(totalBets?: number): void {
    this.totalBets = totalBets;
  }
}

export const autoBetStore = new AutoBetStore();
