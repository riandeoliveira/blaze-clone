import { makeAutoObservable } from "mobx";

export class FreeBetStore {
  public autoCrashout?: number;
  public isAutoBets: boolean;

  public constructor() {
    this.autoCrashout = undefined;
    this.isAutoBets = false;

    makeAutoObservable(this);
  }

  public setAutoCrashout(autoCrashout?: number): void {
    this.autoCrashout = autoCrashout;
  }

  public toggleAutoBets(): void {
    this.isAutoBets = !this.isAutoBets;
  }
}

export const freeBetStore = new FreeBetStore();
