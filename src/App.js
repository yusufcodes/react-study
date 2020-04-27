import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Yusuf" age="20" />
        <Person name="Max" age="28" />
        <Person name="Bob" age="31" />
      </div>
    );

    // Compiled code: 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Test'));
  }
}

export default App;
