import React from 'react';
import Person from './Person/Person';

const Persons = ({ persons, click, changed }) => (
  persons.map((person, index) => (
    <Person
      click={() => click(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={e => changed(e, person.id)}
    />
  ))
);

export default Persons;
