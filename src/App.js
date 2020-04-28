import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Yusuf', age: 20},
      { name: 'Manu', age: 29},
      { name: 'Steph', age: 26}
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>Yusuf's test content, output from props.children</Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age} />
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );

    // Compiled code: 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Test'));
  }
}

export default App;
