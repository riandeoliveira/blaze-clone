import type { LocalStorageKeys } from "types/local-storage";
import { beforeEach, describe, expect, it } from "vitest";
import { baseLocalStorageExtension } from ".";

const storageMockData = {
  access_token: "983fc27br46t986347tbrv73",
  authenticated: true,
  time: 200,
};

const setStorageMockItems = (): void => {
  baseLocalStorageExtension.setItem("access_token", "983fc27br46t986347tbrv73");
  baseLocalStorageExtension.setItem("authenticated", true);
  baseLocalStorageExtension.setItem("time", 200);
};

describe("Base Local Storage Extension", () => {
  beforeEach(() => {
    baseLocalStorageExtension.clear();
  });

  it("Should populate Local Storage", () => {
    setStorageMockItems();

    expect(baseLocalStorageExtension.length).toBe(3);
  });

  it("Should clear Local Storage", () => {
    setStorageMockItems();

    baseLocalStorageExtension.clear();

    expect(baseLocalStorageExtension.length).toBe(0);
  });

  it("Should be null when trying to access an item with a non-existent key", () => {
    expect(baseLocalStorageExtension.getItem<LocalStorageKeys, unknown>("access_token")).toBe(null);
  });

  it("Should get an item by key", () => {
    baseLocalStorageExtension.setItem("values", storageMockData);

    expect(baseLocalStorageExtension.getItem("values")).toEqual(storageMockData);
  });

  it("Should get an item by index", () => {
    setStorageMockItems();

    expect(baseLocalStorageExtension.key(2)).toBe("time");
  });

  it("Should be null when trying to access an item with a non-existent index", () => {
    setStorageMockItems();

    expect(baseLocalStorageExtension.key(5)).toBe(null);
  });

  it("Should remove an item by key", () => {
    setStorageMockItems();

    baseLocalStorageExtension.removeItem("authenticated");

    expect(baseLocalStorageExtension.getItem("authenticated")).toBe(null);
  });
});
