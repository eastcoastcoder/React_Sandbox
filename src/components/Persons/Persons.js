import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  componentDidMount() {
    this.lastPersonRef.current.focus();
  }

  lastPersonRef = React.createRef();

  render() {
    const { persons, click, changed } = this.props;
    return persons.map((person, index) => (
      <Person
        click={() => click(index)}
        name={person.name}
        position={index}
        age={person.age}
        key={person.id}
        ref={this.lastPersonRef}
        // forwardedRef={this.lastPersonRef}
        changed={e => changed(e, person.id)}
      />
    ));
  }
}

export default Persons;
