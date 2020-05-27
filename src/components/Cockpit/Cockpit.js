import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const toggleBtnRef = useRef(); // Setting up reference for button

  // Empty array passed into useEffect so it only runs once fully loaded and then during cleanup
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // Setting up the click to run once all elements are loaded
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []);

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
            <button
            className={btnClass.join(' ')}
            ref={toggleBtnRef}
            onClick={props.clicked}>
            Show / Hide Names
            </button>
            <button onClick={props.login}>Log in</button>
        </div>
    );

};

export default React.memo(cockpit);