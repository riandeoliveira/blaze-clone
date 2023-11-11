import { beforeEach, describe, expect, it } from "vitest";
import { localStorageExtension } from "../extensions/local-storage-extension";

describe("Local Storage Extension", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Should add a crash point to the crash history", () => {
    localStorageExtension.setCrashHistory([1.05, 3.21]);
    localStorageExtension.addToCrashHistory(42.0);

    expect(localStorageExtension.getCrashHistory()).toEqual([42, 1.05, 3.21]);
  });

  it("Should be an populated array if catch an error when trying to access the crash history", () => {
    localStorageExtension.setCrashHistory(null as any);

    expect(localStorageExtension.getCrashHistory()).toHaveLength(15);
  });

  it("Should be 99.99 if catch an error when trying to access the wallet balance", () => {
    localStorageExtension.setWalletBalance(null as any);

    expect(localStorageExtension.getWalletBalance()).toBe(99.99);
  });

  it("Should not be an empty array when access the crash history", () => {
    expect(localStorageExtension.getCrashHistory()).not.toEqual([]);
  });

  it("Should set and get a crash history", () => {
    localStorageExtension.setCrashHistory([1.05, 3.21]);

    expect(localStorageExtension.getCrashHistory()).toEqual([1.05, 3.21]);
  });

  it("Should set and get a wallet balance", () => {
    localStorageExtension.setWalletBalance(49.99);

    expect(localStorageExtension.getWalletBalance()).toBe(49.99);
  });
});
