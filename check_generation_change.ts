export interface Cell {
    status: "dead" | "alive"
    livingNeighbours: number;
}

export const checkStatusForNextGeneration = (cell: Cell): "dead" | "alive" => {
    if(cell.livingNeighbours === 2) {
        return "alive";
    }
    return "dead"
};