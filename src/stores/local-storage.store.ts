import { crashExtension } from "extensions/crash-extension";
import { localStorageExtension } from "extensions/local-storage-extension";
import _ from "lodash";
import { makeAutoObservable } from "mobx";
import { crashHistorySchema, walletBalanceSchema } from "schemas/local-storage-schemas";

export class LocalStorageStore {
  public crashHistory: number[];
  public walletBalance: number;

  public constructor() {
    this.crashHistory = this.getCrashHistory();
    this.walletBalance = this.getWalletBalance();

    makeAutoObservable(this);
  }

  public addToCrashHistory(crashPoint: number): void {
    this.setCrashHistory([crashPoint, ...this.crashHistory]);
  }

  public addToWalletBalance(amount: number): void {
    this.setWalletBalance(this.walletBalance + amount);
  }

  private getCrashHistory(): number[] {
    const crashHistory = localStorageExtension.getItem<number[]>("crash_history");

    try {
      return crashHistorySchema.parse(crashHistory);
    } catch {
      const newCrashHistory: number[] = [];

      _.times(15, () => {
        const crashPoint: number = crashExtension.generateCrashPoint();

        newCrashHistory.push(crashPoint);
      });

      localStorageExtension.setItem("crash_history", newCrashHistory);

      return newCrashHistory;
    }
  }

  private getWalletBalance(): number {
    const walletBalance = localStorageExtension.getItem<number>("wallet_balance");

    try {
      return walletBalanceSchema.parse(walletBalance);
    } catch {
      localStorageExtension.setItem("wallet_balance", 100);

      return 100;
    }
  }

  public setCrashHistory(crashHistory: number[]): void {
    localStorageExtension.setItem("crash_history", crashHistory);

    this.crashHistory = this.getCrashHistory();
  }

  public setWalletBalance(walletBalance: number): void {
    localStorageExtension.setItem("wallet_balance", walletBalance);

    this.walletBalance = this.getWalletBalance();
  }
}

export const localStorageStore = new LocalStorageStore();
