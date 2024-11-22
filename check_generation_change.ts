export interface Cell {
    status: 'dead' | 'alive';
    livingNeighbours: number;
}

const survive = (cell: Cell): boolean => cell.status === 'alive' && (cell.livingNeighbours === 2 || cell.livingNeighbours === 3);

const reproduce = (cell: Cell): boolean => cell.status === 'dead' && cell.livingNeighbours === 3;

export const checkStatusForNextGeneration = (cell: Cell): 'dead' | 'alive' => {
    if (survive(cell) || reproduce(cell)) {
        return 'alive';
    }

    return 'dead';
};
