import { makeAutoObservable } from "mobx";

export class LoadingStore {
  public isLoading: boolean;

  public constructor() {
    this.isLoading = false;

    makeAutoObservable(this);
  }

  public stop(): void {
    this.isLoading = false;
  }

  public wait(): void {
    this.isLoading = true;
  }
}

export const loadingStore = new LoadingStore();
