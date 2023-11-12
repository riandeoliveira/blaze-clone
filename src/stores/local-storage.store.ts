import { crashExtension } from "extensions/crash-extension";
import { localStorageExtension } from "extensions/local-storage-extension";
import _ from "lodash";
import { makeAutoObservable } from "mobx";
import { crashHistorySchema, walletBalanceSchema } from "schemas/local-storage-schemas";

export class LocalStorageStore {
  private _crashHistory: number[];
  private _walletBalance: number;

  public constructor() {
    this._crashHistory = this.crashHistory;
    this._walletBalance = this.walletBalance;

    makeAutoObservable(this);
  }

  public addToCrashHistory(crashPoint: number): void {
    this.setCrashHistory([crashPoint, ...this.crashHistory]);
  }

  public get crashHistory(): number[] {
    const crashHistory = localStorageExtension.getItem<number[]>("crash_history");

    try {
      const parsedValue: number[] = crashHistorySchema.parse(crashHistory);

      this.setCrashHistory(parsedValue);

      return this._crashHistory;
    } catch {
      const newCrashHistory: number[] = [];

      _.times(15, () => {
        const crashPoint: number = crashExtension.generateCrashPoint();

        newCrashHistory.push(crashPoint);
      });

      this.setCrashHistory(newCrashHistory);
      return this._crashHistory;
    }
  }

  public get walletBalance(): number {
    const walletBalance = localStorageExtension.getItem<number>("wallet_balance");

    try {
      const parsedValue: number = walletBalanceSchema.parse(walletBalance);

      this.setWalletBalance(parsedValue);
    } catch {
      this.setWalletBalance(99.99);
    }

    return this._walletBalance;
  }

  public setCrashHistory(crashHistory: number[]): void {
    localStorageExtension.setItem("crash_history", crashHistory);

    this._crashHistory = crashHistory;
  }

  public setWalletBalance(walletBalance: number): void {
    localStorageExtension.setItem("wallet_balance", walletBalance);

    this._walletBalance = walletBalance;
  }
}

export const localStorageStore = new LocalStorageStore();
