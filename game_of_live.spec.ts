import {describe, expect, it} from "vitest";
import {checkIfCellWillBeDead} from "./check_generation_change";

describe("Game Of Live", () => {
  it("should run a test", () => {
    expect(1).toBe(1);
  });

  it("should die if underpopulation", () => {
    const cell = {
      dead: false,
      livingNeighbours: 1
    }
    expect(checkIfCellWillBeDead(cell)).toBe(true)
  })

  it("should survice if surrounded by 2 living cells", () => {
    const cell = {
      dead: false,
      livingNeighbours: 2
    }

    expect(checkIfCellWillBeDead(cell)).toBe(false)
  })
});

