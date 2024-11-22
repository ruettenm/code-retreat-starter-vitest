import {describe, expect, it} from "vitest";
import {Cell, checkStatusForNextGeneration} from './check_generation_change';

describe("Game Of Live", () => {
  it("should die if underpopulation", () => {
    const cell: Cell = {
      status: "alive",
      livingNeighbours: 1
    }
    expect(checkStatusForNextGeneration(cell)).toBe("dead")
  })

  it("should survice if surrounded by 2 living cells", () => {
    const cell: Cell = {
      status: "alive",
      livingNeighbours: 2
    }

    expect(checkStatusForNextGeneration(cell)).toBe("alive")
  })
});

