import { describe, expect, it } from "vitest";

describe("Game Of Live", () => {
  describe('multiple cells', () => {
    it('should reduce the living neighbours when a cell dies', () => {
      const allCells = [
        {
          status: 'living',
          livingNeighbours: 1,
          coordinates: {
            x: 1,
            y: 1
          }
        },
        {
          status: 'living',
          livingNeighbours: 1,
          coordinates: {
            x: 0,
            y: 2
          }
        }
      ]

      const nextGenerationCells = updateCells(allCells)

      expect(nextGenerationCells[0].status).toBe('dead')
      expect(nextGenerationCells[1].status).toBe('dead')
    })

    it('should reduce the living neighbours when a cell dies', () => {
      const allCells = [
        {
          status: 'living',
          livingNeighbours: 1,
          coordinates: {
            x: 1,
            y: 1
          }
        },
        {
          status: 'living',
          livingNeighbours: 2,
          coordinates: {
            x: 1,
            y: 2
          }
        },
        {
          status: 'living',
          livingNeighbours: 1,
          coordinates: {
            x: 1,
            y: 3
          }
        }
      ]

      const nextGenerationCells = updateCells(allCells)

      expect(nextGenerationCells[0].status).toBe('dead')
      expect(nextGenerationCells[1].status).toBe('living')
      expect(nextGenerationCells[2].status).toBe('dead')
    })
  })

  describe('1 neighbour', () => {
    it("should die on underpopulation (less then 2 neighbours)", () => {
      const cell = {
        status: 'living',
        livingNeighbours: 1,
        coordinates: {
          x: 0,
          y: 2
        }
      }
      expect(checkIfCellWillDie(cell)).toBe('dead')
    })

    it("should die on underpopulation (less then 2 neighbours)", () => {
      const cell = {
        status: 'dead',
        livingNeighbours: 1
      }
      expect(checkIfCellWillDie(cell)).toBe('dead')
    })
  })

  describe('2 neighbours', () => {
    it("should survive the cell has on when 2 neighbours", () => {
      const cell = {
        status: 'living',
        livingNeighbours: 2
      }
      expect(checkIfCellWillDie(cell)).toBe('living')
    })

    it("should NOT reproduce if the cell has 2 neighbours", () => {
      const cell = {
        status: 'dead',
        livingNeighbours: 2
      }
      expect(checkIfCellWillDie(cell)).toBe('dead')
    })
  })

  describe('3 neighbours', () => {
    it("should survive the cell has on when 3 neighbours", () => {
      const cell = {
        status: 'living',
        livingNeighbours: 3
      }
      expect(checkIfCellWillDie(cell)).toBe('living')
    })

    it("should reproduce if the cell has 3 neighbours", () => {
      const cell = {
        status: 'dead',
        livingNeighbours: 3
      }
      expect(checkIfCellWillDie(cell)).toBe('living')
    })
  })

  describe('5 neighbours', () => {
    it("should reproduce if the cell has 3 neighbours", () => {
      const cell = {
        status: 'living',
        livingNeighbours: 4
      }
      expect(checkIfCellWillDie(cell)).toBe('dead')
    })
  })
});
