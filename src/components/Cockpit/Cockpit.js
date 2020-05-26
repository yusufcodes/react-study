import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];

    let btnClass = [classes.Button];

    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    if (props.persons.length <= 2) 
    {
      assignedClasses.push(props.classes.red);
    }
    if (props.persons.length <= 1) 
    {
      assignedClasses.push(props.classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>
            Show / Hide Names
            </button>
        </div>
    );

};

export default cockpit;