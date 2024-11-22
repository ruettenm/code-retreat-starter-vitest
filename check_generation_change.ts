export interface Cell {
    status: "dead" | "alive"
    livingNeighbours: number;
}

function survive(cell: Cell) {
    return cell.status === 'alive' && (cell.livingNeighbours === 2 || cell.livingNeighbours === 3);
}

function repruduce(cell: Cell) {
    return cell.status === 'dead' && cell.livingNeighbours === 3;
}

export const checkStatusForNextGeneration = (cell: Cell): "dead" | "alive" => {
    if(survive(cell) || repruduce(cell)) {
        return "alive";
    }

    return "dead"
};