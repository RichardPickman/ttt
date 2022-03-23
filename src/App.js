import React, { useState, useEffect } from 'react';

import Board from './components/board'


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
      <div className={styles.root}>
          {!winner && <Board cells={cells} onClick={onClick} />}
          {winner && (
              <div>
                  <LeaderBoard winner={winner} stat={steps[winner]} />
                  <button className={styles.reset} onClick={() => setState(getInitialState())}>Reset</button>
              </div>
          )}
      </div>
  );
};

export default App;