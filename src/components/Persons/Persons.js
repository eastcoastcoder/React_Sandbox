import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  render() {
    const { persons, click, changed } = this.props;
    return persons.map((person, index) => (
      <Person
        click={() => click(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={e => changed(e, person.id)}
      />
    ));
  }
}

export default Persons;
