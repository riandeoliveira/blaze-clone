import { action, makeAutoObservable, observable } from "mobx";

class CrashGameStore {
  public isCrashed: boolean;
  public multiplier: number;

  public constructor() {
    this.isCrashed = false;
    this.multiplier = 1.0;

    makeAutoObservable(this, {
      isCrashed: observable,
      multiplier: observable,

      setMultiplier: action,
    });
  }

  public setIsCrashed(isCrashed: boolean): void {
    this.isCrashed = isCrashed;
  }

  public setMultiplier(multiplier: number): void {
    this.multiplier = multiplier;
  }
}

export const crashGameStore = new CrashGameStore();
