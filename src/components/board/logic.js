

function logic(cells, currentPlayer, setWinner){
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWin() {
        return winningCombinations.some((combination) => {
            return combination.every((i) => {
                return cells[i] === currentPlayer
            });
        });
    };

    if (checkWin()) {
        setWinner(true)
    }
}

export default logic;