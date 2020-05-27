import React, { Component } from 'react';
import Auxilary from '../../../hoc/Auxilary';
import PropTypes from 'prop-types';

// Returns a React Component
// Class based: {this.props.name}
class Person extends Component {
    constructor()
    {
        super();
        // This will hold the reference for our input element once it is set later in 'ref' attribute
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxilary>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                type="text"
                key="t5"
                // ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef}
                onChange={this.props.changed}
                value={this.props.name}/>
            </Auxilary>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;