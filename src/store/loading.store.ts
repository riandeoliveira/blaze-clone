import { makeAutoObservable, observable } from "mobx";

class LoadingStore {
  public isLoading: boolean;

  public constructor() {
    this.isLoading = false;

    makeAutoObservable(this, {
      isLoading: observable,
    });
  }

  public wait(): void {
    this.isLoading = true;
  }

  public stop(): void {
    this.isLoading = false;
  }
}

export const loadingStore = new LoadingStore();
