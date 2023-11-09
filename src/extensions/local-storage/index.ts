import { BaseLocalStorageExtension } from "../local-storage.base";
import { crashHistorySchema, walletBalanceSchema } from "./schemas";

export class LocalStorageExtension extends BaseLocalStorageExtension {
  public addToCrashHistory(crashPoint: number): void {
    this.setCrashHistory([crashPoint, ...this.getCrashHistory()]);
  }

  public getCrashHistory(): number[] {
    const crashHistory: number[] | null = this.getItem<number[]>("crash_history");

    try {
      return crashHistorySchema.parse(crashHistory);
    } catch {
      this.setCrashHistory([]);

      return [];
    }
  }

  public getWalletBalance(): number {
    const walletBalance: number | null | undefined = this.getItem<number>("wallet_balance");

    try {
      return walletBalanceSchema.parse(walletBalance);
    } catch {
      this.setWalletBalance(0);

      return 0;
    }
  }

  public setCrashHistory(crashHistory: number[]): void {
    this.setItem<number[]>("crash_history", crashHistory);
  }

  public setWalletBalance(walletBalance: number): void {
    this.setItem<number>("wallet_balance", walletBalance);
  }
}

export const localStorageExtension = new LocalStorageExtension();
