import React from 'react';
import classes from './Person.css'

// Returns a React Component
// Class based: {this.props.name}
const person = (props) => {

    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
        <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;