import React from 'react';
import styled from 'styled-components';
import './Person.css'

// Returns a React Component
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    '@media (min-width: 500px)': {
        width: '450px'
    }
    `;

// Class based: {this.props.name}
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
        <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};

export default person;