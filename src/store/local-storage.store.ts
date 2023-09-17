import { makeAutoObservable } from "mobx";
import type { LocalStorageKeys } from "types/local-storage";

export class LocalStorageStore {
  public accessToken: string | null;
  public previousCrashList: number[] | null;
  public walletBalance: number | null;

  public constructor() {
    this.accessToken = this.getItem("access_token");
    this.previousCrashList = this.getItem("previous_crash_list");
    this.walletBalance = this.getItem("wallet_balance");

    makeAutoObservable(this);
  }

  public getItem<T>(key: LocalStorageKeys): T | null {
    const storageItem: string | null = localStorage.getItem(key);

    if (storageItem) return JSON.parse(storageItem);

    return null;
  }

  public setItem<T>(key: LocalStorageKeys, value: T): void {
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

  public setWalletBalance(walletBalance: number | null): void {
    this.setItem("wallet_balance", walletBalance);

    this.walletBalance = this.getItem("wallet_balance");
  }
}
