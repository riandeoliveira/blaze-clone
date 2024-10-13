import { LocalStorageHelper } from "@/helpers/local-storage-helper";
import { makeAutoObservable } from "mobx";
import { z } from "zod";

export const walletBalanceSchema = z.number().positive();

export interface IWalletBalanceStore {
  amount: number;

  incrementWith(amount: number): void;
}

export class WalletBalanceStore implements IWalletBalanceStore {
  public amount: number = this.getAmount();

  public constructor() {
    this.synchronize();

    makeAutoObservable(this);
  }

  private getAmount(): number {
    const walletBalance: number | null = LocalStorageHelper.getItem("wallet_balance");

    try {
      return walletBalanceSchema.parse(walletBalance);
    } catch {
      return 0;
    }
  }

  private setAmount(amount: number): void {
    LocalStorageHelper.setItem("wallet_balance", amount);

    this.amount = amount;
  }

  private synchronize(): void {
    addEventListener("storage", () => {
      this.setAmount(this.getAmount());
    });
  }

  public incrementWith(amount: number): void {
    this.setAmount(this.amount + amount);
  }
}
