import type { LocalStorageKeys } from "types/local-storage";
import { BaseLocalStorageExtension } from "../../extensions/local-storage/base";

export class LocalStorageExtension extends BaseLocalStorageExtension {
  public getWalletBalance(): number {
    const item: number | null = this.getItem<LocalStorageKeys, number>("wallet_balance");

    if (typeof item !== "number" || item < 0) {
      this.setItem<LocalStorageKeys, number>("wallet_balance", 0);

      return 0;
    }

    return item;
  }
}

export const localStorageExtension = new LocalStorageExtension();
