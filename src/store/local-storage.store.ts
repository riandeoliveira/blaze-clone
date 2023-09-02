import { action, makeAutoObservable, observable } from "mobx";

class LocalStorageStore {
  public accessToken: string | null;

  public constructor() {
    this.accessToken = this.getItem("access_token");

    makeAutoObservable(this, {
      accessToken: observable,

      getItem: action,
      setAccessToken: action,
      setItem: action,
    });
  }

  public getItem<T>(key: string): T | null {
    const storageItem: string | null = localStorage.getItem(key);

    if (storageItem) return JSON.parse(storageItem);

    return null;
  }

  public setAccessToken(accessToken: string | null): void {
    this.setItem("access_token", accessToken);
  }

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value, null, 2));
  }
}

export const localStorageStore = new LocalStorageStore();
