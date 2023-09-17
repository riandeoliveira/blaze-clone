import { makeAutoObservable } from "mobx";
import type { LocalStorageKeys } from "types/local-storage";

export class LocalStorageStore {
  public previousCrashList: number[];
  public walletBalance: number;

  public constructor() {
    this.previousCrashList = this.getOrCreateItem<number[]>("previous_crash_list", []);
    this.walletBalance = this.getOrCreateItem<number>("wallet_balance", 0);

    makeAutoObservable(this);
  }

  public addToWalletBalance(value: number): void {
    const updatedList = [value, ...this.previousCrashList];

    this.setPreviousCrashList(updatedList);
  }

  public getItem<T>(key: LocalStorageKeys): T | null {
    const storageItem: string | null = localStorage.getItem(key);

    if (storageItem) return JSON.parse(storageItem);

    return null;
  }

  private getOrCreateItem<T>(key: LocalStorageKeys, defaultValue: T): T {
    const storageItem: T | null = this.getItem<T>(key);

    if (storageItem) return storageItem;

    this.setItem(key, defaultValue);

    return defaultValue;
  }

  public setItem<T>(key: LocalStorageKeys, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public setPreviousCrashList(previousCrashList: number[]): void {
    this.setItem("previous_crash_list", previousCrashList);
    this.previousCrashList = previousCrashList;
  }

  public setWalletBalance(walletBalance: number): void {
    this.setItem("wallet_balance", walletBalance);
    this.walletBalance = walletBalance;
  }
}
