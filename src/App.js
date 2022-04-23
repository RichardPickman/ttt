import React, { useState, useEffect } from 'react';

import { getInitialState, getNextPlayer, getWinner } from './helpers.ts';
import styles from './App.module.css';
import Board from './components/Board';


const App = () => {
  const [state, setState] = useState(getInitialState());
  const { currentPlayer, cells, winner, steps } = state;

  const onClick = (clickIndex) => {
    const newCells = cells.map((cell, index) => (!cell && index === clickIndex) ? currentPlayer : cell);

    setState({
        ...state,
        cells: newCells,
        currentPlayer: getNextPlayer(currentPlayer),
        steps: {
            ...steps,
            [currentPlayer]: steps[currentPlayer] + 1,
        },
    });
  };

  useEffect(() => setState({
      ...state,
      winner: getWinner(cells),
  }), [cells]);

  return (
      <div className={styles.board}>
          {!winner && <Board cells={cells} onClick={onClick} />}
      </div>
  );
};

export default App;
