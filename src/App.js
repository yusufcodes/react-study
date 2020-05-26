import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'djue3', name: 'Max', age: 28 },
      { id: 'cije3',name: 'Manu', age: 29 },
      { id: 'hfcd5', name: 'Stephanie', age: 26 }
    ],
    showPeople: false
  };

  nameChangedHandler = (event, id) => {
    // Get a copy of the persons state
    const persons = [...this.state.persons];

    // Get the ID of the current person
    const personIndex = persons.findIndex(p => p.id === id);

    // * Get the person out of the state using the ID - immutably
    const person = {
      ...persons[personIndex]
    };

    // Change the value of the name of the current person
    person.name = event.target.value;

    // Update the persons array
    persons[personIndex] = person;

    // Update the persons state
    this.setState({persons: persons});
  }

  usernameChangedHandler = (event) => {
    this.setState({
      usernames: [event.target.value, 'Bob']
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  displayPeopleChangedHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  };

  render() {
    let people = null;
    let btnClass = [classes.Button];
    console.log(btnClass);

    if (this.state.showPeople) {
      people = (
        <div>
          {/* Dynamic generation of content from state, by mapping 
          JS Object => JSX component */}
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) 
    {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) 
    {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')} onClick={this.displayPeopleChangedHandler}>
        Show / Hide Names
        </button>
        {people}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
