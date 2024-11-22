import {describe, expect, it} from "vitest";
import {checkIfCellWillBeDead} from "./check_generation_change";

describe("Game Of Live", () => {
  it("should run a test", () => {
    expect(1).toBe(1);
  });

  it("should die if underpopulation", () => {
    const cell = {
      dead: false
    }
    expect(checkIfCellWillBeDead(cell)).toBe(true)
  })
});

