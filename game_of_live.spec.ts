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

  describe('2 cells', () => {

  })
  it("should survive if surrounded by 2 living cells", () => {
    const cell: Cell = {
      status: "alive",
      livingNeighbours: 2
    }

    expect(checkStatusForNextGeneration(cell)).toBe("alive")
  })

  it("should survive if surrounded by 3 living cells", () => {
    const cell: Cell = {
      status: "alive",
      livingNeighbours: 3
    }

    expect(checkStatusForNextGeneration(cell)).toBe("alive")
  })

  it("should reproduce if surrounded by 3 living cells", () => {
    const cell: Cell = {
      status: "dead",
      livingNeighbours: 3
    }

    expect(checkStatusForNextGeneration(cell)).toBe("alive")
  })

  it("should not reproduce if surrounded by 2 living cells", () => {
    const cell: Cell = {
      status: "dead",
      livingNeighbours: 2
    }

    expect(checkStatusForNextGeneration(cell)).toBe("dead")
  })
});
