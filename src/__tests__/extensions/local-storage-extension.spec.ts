import { beforeEach, describe, expect, it } from "vitest";
import { localStorageExtension } from "../../extensions/local-storage-extension";

describe("Local Storage Extension", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Should automatically serialize and deserialize in local storage", () => {
    const user = {
      name: "John",
      age: 20,
    };

    localStorageExtension.setItem("value" as any, user);

    expect(localStorageExtension.getItem("value" as any)).toEqual(user);
  });

  it("Should be null when catch an error", () => {
    localStorageExtension.setItem("value" as any, undefined);

    expect(localStorageExtension.getItem("value" as any)).toBe(null);
  });

  it("Should be null when trying to access an item with a non-existent key", () => {
    expect(localStorageExtension.getItem("value" as any)).toBe(null);
  });
});
