import Cell from '../Cells'

const Board = ({ cells, onClick }) => (
        cells && cells.map((cell, index) => ( <Cell symbol={cell} key={index} onClick={() => onClick(index)}/> ))
);

export default Board;
