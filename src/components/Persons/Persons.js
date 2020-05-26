import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
    return (
    <Person
    click={() => props.clicked(index)}
    key={person.id}
    name={person.name}
    age={person.age}
    changed={(event) => props.changed(event, person.id)}/> 
    );
});

}

export default persons;