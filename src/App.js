import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );

    // Compiled code: 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Test'));
  }
}

export default App;
