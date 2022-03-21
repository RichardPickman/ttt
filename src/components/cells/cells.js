import { useState } from 'react'
import './cells.css'


function Cells(props) {
    const { playerTurn, index } = props;

    const [playerClass, setPlayerClass] = useState('');
    const classes = ['cell', playerClass].join(' ');

    function onClick() {
        setPlayerClass(props.player)
        playerTurn(index)
    }

    return <button className={classes} onClick={() => onClick()} />
};

export default Cells;