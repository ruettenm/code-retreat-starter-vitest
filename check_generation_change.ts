interface Cell {
    dead: boolean
    livingNeighbours: number;
}

export function checkIfCellWillBeDead(cell: Cell) {
    if(cell.livingNeighbours === 2) {
        return false;
    }
    return true
}