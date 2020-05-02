import React from 'react';
// userChange

let style = {
    color: 'red',
    width: '100px'
}
const userInput = (props) => {
    return (
        <input
        onChange={props.userChange}
        value={props.username}
        style={style}></input>
    )
};

export default userInput;