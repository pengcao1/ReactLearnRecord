import React from 'react'
function FSquare(props) {
    return (
        <button className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}
export default FSquare;