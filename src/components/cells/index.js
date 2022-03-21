import './cells.css'

function Cells(currentPlayer, ...props) {
    const cellsCollection = []
    
    for (let i=0; i < 9; i++) {
        const cell = <button className={buttonStyles} onClick={onChangeState()} key={i} />

        cellsCollection.push(cell);
    }

    return cellsCollection;
};

export default Cells;