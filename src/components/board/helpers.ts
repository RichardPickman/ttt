import { CellState } from '../../types/index'


const isWin = (symbol, cells) => {

    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    if (combinations.some(combination => combination.every(index => cells[index] === symbol))) {
        return symbol;
    }

    return null;
}

const getWinner = (cells: CellState[]) => isWin('x', cells) || isWin('o', cells) || null;

const getNextPlayer = currentPlayer => currentPlayer === 'x' ? 'o' : 'x';

const getInitialState = () => ({
    steps: { x: 0, o: 0 },
    cells: new Array(9).fill(null),
    currentPlayer: 'x',
    winner: null,
});