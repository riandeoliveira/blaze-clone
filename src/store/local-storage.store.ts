import { makeAutoObservable } from "mobx";
import type { LocalStorageKeys } from "types/local-storage";

export class LocalStorageStore {
  public crashHistory: number[];
  public walletBalance: number;

  public constructor() {
    this.crashHistory = this.getOrCreateItem<number[]>("crash_history", []);
    this.walletBalance = 0;

    makeAutoObservable(this);
  }

  public addToWalletBalance(value: number): void {
    const updatedList = [value, ...this.crashHistory];

    this.setCrashHistory(updatedList);
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

  public setCrashHistory(crashHistory: number[]): void {
    this.setItem("crash_history", crashHistory);
    this.crashHistory = crashHistory;
  }

  public setWalletBalance(walletBalance: number): void {
    this.setItem("wallet_balance", walletBalance);
    this.walletBalance = walletBalance;
  }
}

export const localStorageStore = new LocalStorageStore();
