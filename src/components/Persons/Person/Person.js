import React, { Component } from 'react';
import Auxilary from '../../../hoc/Auxilary';
import classes from './Person.css'

// Returns a React Component
// Class based: {this.props.name}
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxilary>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxilary>
        );
    }
};

export default Person;