import { useEffect, useState } from 'react';

import './board.css';
import Cells from '../cells/index';

export function Board() {
    const [currentPlayer, setCurrentPlayer] = useState('x')

    const changeCurrentPlayer = (player) => {
        setCurrentPlayer(player)
    }

    return (
    <div className='board'>
        <Cells player={currentPlayer} changePlayer={changeCurrentPlayer} />
    </div>)
};

export default Board;