import './button.css'

function Button(props) {
    return (
        <button className="button"> {props.title} </button>
    )
}

export default Button;