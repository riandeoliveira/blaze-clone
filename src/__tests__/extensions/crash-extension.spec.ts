import { describe, expect, it } from "vitest";
import { crashExtension } from "../../extensions/crash-extension";

describe("Crash Extension", () => {
  it("Should generate a crash point", () => {
    expect(crashExtension.generateCrashPoint()).toBeGreaterThanOrEqual(1);
  });
});
