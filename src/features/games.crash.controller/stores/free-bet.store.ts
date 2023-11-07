import { makeAutoObservable } from "mobx";

export class FreeBetStore {
  public autoBets: number | null;
  public autoCrashout: number | null;

  public constructor() {
    this.autoBets = null;
    this.autoCrashout = null;

    makeAutoObservable(this);
  }

  public setAutoBets(autoBets: number): void {
    this.autoBets = autoBets;
  }

  public setAutoCrashout(autoCrashout: number): void {
    this.autoCrashout = autoCrashout;
  }
}

export const freeBetStore = new FreeBetStore();
