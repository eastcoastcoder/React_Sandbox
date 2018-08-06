import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 12 },
      { id: 2, name: 'Bill', age: 22 },
      { id: 3, name: 'Dave', age: 44 },
    ],
    // targetPerson: 0,
    visible: false,
  }

  togglePeopleHandler = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  nameChangeHandler = (e, id) => {
    // Most efficient way without mutating state
    // Always work with copies
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  render() {
    const { persons, visible } = this.state;

    return (
      <div className={classes.App}>
        <Cockpit
          visible={visible}
          togglePeopleHandler={this.togglePeopleHandler}
          persons={persons}
        />
        {visible && (
          <Persons
            persons={persons}
            changed={this.nameChangeHandler}
            click={this.deletePersonHandler}
          />
        )}
      </div>
    );
  }
}

export default hot(module)(App);
