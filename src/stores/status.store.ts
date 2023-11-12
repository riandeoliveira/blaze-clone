import { makeAutoObservable } from "mobx";

export class StatusStore {
  public isCrashed: boolean;
  public isLoading: boolean;

  public constructor() {
    this.isCrashed = false;
    this.isLoading = false;

    makeAutoObservable(this);
  }

  public reset(): void {
    this.isCrashed = false;
    this.isLoading = false;
  }

  public setIsCrashed(isCrashed: boolean): void {
    this.isCrashed = isCrashed;
  }

  public setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }
}

export const statusStore = new StatusStore();
