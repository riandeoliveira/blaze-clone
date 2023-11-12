import { localStorageStore } from "stores/local-storage.store";
import { beforeEach, describe, expect, it } from "vitest";

describe("Local Storage Store", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Should add a crash point to the crash history", () => {
    localStorageStore.setCrashHistory([1.05, 3.21]);
    localStorageStore.addToCrashHistory(42.0);

    expect(localStorageStore.crashHistory).toEqual([42, 1.05, 3.21]);
  });

  it("Should be an populated array if catch an error when trying to access the crash history", () => {
    localStorageStore.setCrashHistory(null as any);

    expect(localStorageStore.crashHistory).toHaveLength(15);
  });

  it("Should be the default value if catch an error when trying to access the wallet balance", () => {
    localStorageStore.setWalletBalance(null as any);

    expect(localStorageStore.walletBalance).toBe(100);
  });

  it("Should deposit an amount into the wallet balance", () => {
    localStorageStore.setWalletBalance(100);
    localStorageStore.addToWalletBalance(10);

    expect(localStorageStore.walletBalance).toBe(110);
  });

  it("Should not be an empty array when access the crash history", () => {
    expect(localStorageStore.crashHistory).not.toEqual([]);
  });

  it("Should set and get a crash history", () => {
    localStorageStore.setCrashHistory([1.05, 3.21]);

    expect(localStorageStore.crashHistory).toEqual([1.05, 3.21]);
  });

  it("Should set and get a wallet balance", () => {
    localStorageStore.setWalletBalance(49.99);

    expect(localStorageStore.walletBalance).toBe(49.99);
  });
});
