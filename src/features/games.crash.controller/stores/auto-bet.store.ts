import { makeAutoObservable } from "mobx";

export class AutoBetStore {
  public amount: number | null;
  public autoCrashout: number | null;
  public totalBets: number | null;

  public constructor() {
    this.amount = null;
    this.autoCrashout = null;
    this.totalBets = null;

    makeAutoObservable(this);
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public setAutoCrashout(autoCrashout: number): void {
    this.autoCrashout = autoCrashout;
  }

  public setTotalBets(totalBets: number): void {
    this.totalBets = totalBets;
  }
}

export const autoBetStore = new AutoBetStore();
