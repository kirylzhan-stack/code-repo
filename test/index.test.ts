import { describe, expect, it } from "vitest";
import { sparkStatus, tinyWin } from "../src/index.js";

describe("sparkStatus", () => {
  it("formats message for provided name and mood", () => {
    expect(sparkStatus("Kiryl", "turbo")).toBe("Kiryl: shipping mode");
  });

  it("uses fallback name when input is blank", () => {
    expect(sparkStatus("   ", "normal")).toBe("anonymous dev: steady focus");
  });
});

describe("tinyWin", () => {
  it("returns small win for low positive points", () => {
    expect(tinyWin(3)).toBe("small win");
  });

  it("returns big win for 5 or more points", () => {
    expect(tinyWin(5)).toBe("big win");
  });
});
