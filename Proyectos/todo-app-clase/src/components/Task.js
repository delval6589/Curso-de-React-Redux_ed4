import React, {useState, Fragment} from "react";

export default props => {
    const [value, setValue] = useState(props.children);
    const isEnter = event => event.keyCode === 13;
    const handleKeyPressed = (ev) => {
        if (!isEnter(ev)) {
            return;
        }

        props.onKeyPress(value);
    }

    return (
        <Fragment>
            <input onChange={ev => setValue(ev.target.value)} onBlur={() => props.onBlur(value)} onKeyPress={ev => handleKeyPressed(ev)} value={value} />
            <button>{props.removeText}</button>
        </Fragment>
    )
    
}