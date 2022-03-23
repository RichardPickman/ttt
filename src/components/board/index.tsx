import Cell from '../cells'
import * as styles from './board.module.css'


const Board = ({ cells, onClick }) => (
    <div className={styles.root}>
        {cells && cells.map((cell, index) => (
            <Cell
                symbol={cell}
                key={index}
                onClick={() => onClick(index)}
            />
        ))}
    </div>
);

export default Board;