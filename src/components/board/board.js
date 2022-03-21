import { useState } from 'react';

import React from 'react';
import Cells from '../cells/cells';
import Winner from '../winnerboard';
import logic from './logic';

import './board.css';

export function Board() {
    const [turns, setTurns] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState('x');
    const [winner, setWinner] = useState(false);
    const [combos, setCombos] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const cells = [];

    const turn = () => setTurns(turns + 1);
    const changePlayer = () => setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');

    const playerTurn = (index) => {
        const tmpCells = [...combos];
        tmpCells[index] = currentPlayer;

        turn();
        setCombos(tmpCells);
        logic(tmpCells, currentPlayer, setWinner);
        changePlayer(currentPlayer === 'x' ? 'o' : 'x');
    };


    for (let i = 0; i < 9; i++) {
        cells.push(<Cells player={currentPlayer} changePlayer={changePlayer} key={i} index={i} playerTurn={playerTurn} />)
    }

    function resetGame() {
        setTurns(0);
        setCurrentPlayer('x');
        setCombos([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        setWinner(false);
    }

    return (
        !winner ?
        <div className='board'> {[...cells]} </div>
        :
        <Winner winner={currentPlayer === 'x' ? 'o' : 'x'} toWinTurns={turns} reset={resetGame}/>
        )
};

export default Board;