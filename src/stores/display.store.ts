import { makeAutoObservable } from "mobx";

export class DisplayStore {
  public limit: number;
  public multiplier: number;

  public constructor() {
    this.limit = 0;
    this.multiplier = 1.0;

    makeAutoObservable(this);
  }

  public reset(): void {
    this.limit = 0;
    this.multiplier = 1.0;
  }

  public setLimit(limit: number): void {
    this.limit = limit;
  }

  public setMultiplier(multiplier: number): void {
    this.multiplier = multiplier;
  }
}

export const displayStore = new DisplayStore();
