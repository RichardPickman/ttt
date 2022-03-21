import Button from "../buttons";
import './winner.css'

function Winner(props) {
    const { reset } = props;

    const popup = <div className="winner"> {props.winner} won in {props.toWinTurns} turns! </div>
    const buttons = (
        <div className="button"> 
            <button className="button" onClick={resetGame}> 
                Reset 
            </button> 
            <button className="button" onClick={score}> 
                Score 
            </button> 
        </div>
    )

    function resetGame() {
        reset()
    }

    function score() {

    }

    return (
        <div className="winner-block"> { [popup, buttons] } </div>
    )
}

export default Winner;