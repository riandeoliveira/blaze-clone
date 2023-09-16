import { makeAutoObservable } from "mobx";

export class LocalStorageStore {
  public accessToken: string | null;
  public previousCrashList: number[] | null;

  public constructor() {
    this.accessToken = this.getItem("access_token");
    this.previousCrashList = this.getItem("previous_crash_list");

    makeAutoObservable(this);
  }

  public getItem<T>(key: string): T | null {
    const storageItem: string | null = localStorage.getItem(key);

    if (storageItem) return JSON.parse(storageItem);

    return null;
  }

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value, null, 2));
  }

  public setAccessToken(accessToken: string | null): void {
    this.setItem("access_token", accessToken);
  }

  public setPreviousCrashList(previousCrashList: number[] | null): void {
    this.setItem("previous_crash_list", previousCrashList);

    this.previousCrashList = this.getItem("previous_crash_list");
  }

  public insert(value: number): void {
    if (this.previousCrashList) {
      this.setPreviousCrashList([value, ...this.previousCrashList]);
    } else {
      this.setPreviousCrashList([value]);
    }
  }
}
