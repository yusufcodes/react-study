import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
    });

    const assignedClasses = [];

    let btnClass = [classes.Button];

    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    if (props.persons.length <= 2) 
    {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) 
    {
      assignedClasses.push(classes.bold);
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

export default React.memo(cockpit);