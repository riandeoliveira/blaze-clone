import { beforeEach, describe, expect, it } from "vitest";
import { baseLocalStorageExtension } from ".";

describe("Base Local Storage Extension", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Should automatically serialize and deserialize in local storage", () => {
    const user = {
      name: "John",
      age: 20,
    };

    baseLocalStorageExtension.setItem("value" as any, user);

    expect(baseLocalStorageExtension.getItem("value" as any)).toEqual(user);
  });

  it("Should be null when catch an error", () => {
    baseLocalStorageExtension.setItem("value" as any, undefined);

    expect(baseLocalStorageExtension.getItem("value" as any)).toBe(null);
  });

  it("Should be null when trying to access an item with a non-existent key", () => {
    expect(baseLocalStorageExtension.getItem("value" as any)).toBe(null);
  });
});
