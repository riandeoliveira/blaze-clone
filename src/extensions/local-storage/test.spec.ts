import { beforeEach, describe, expect, it } from "vitest";
import { localStorageExtension } from ".";

describe("Local Storage Extension", () => {
  beforeEach(() => {
    localStorageExtension.clear();
  });

  it("Should set and get an access token", () => {
    const accessToken: string = "983fc27br46t986347tbrv73";

    localStorageExtension.setAccessToken(accessToken);

    expect(localStorageExtension.getAccessToken()).toBe(accessToken);
  });

  it("Should return an empty string when access token is not a string", () => {
    const accessToken: number = 12345;

    localStorageExtension.setAccessToken(accessToken as any);

    expect(localStorageExtension.getAccessToken()).toBe("");
  });
});
