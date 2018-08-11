import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import classes from './App.css';

class App extends PureComponent {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 12 },
      { id: 2, name: 'Bill', age: 22 },
      { id: 3, name: 'Dave', age: 44 },
    ],
    // targetPerson: 0,
    visible: false,
    toggleClicked: 0,
  }

  togglePeopleHandler = () => {
    const { visible } = this.state;
    /*
      setState is async behind-the scenes
      If setState relies on a previous state,
      Call it with functional sytnax to ensure updates are sync'd
    */
    this.setState((prevState, props) => ({
      visible: !visible,
      toggleClicked: prevState.toggleClicked + 1,
    }));
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
      <Aux>
        <button onClick={() => this.setState({ visible: true })} >Show Persons</button>
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
      </Aux>
    );
  }
}

export default hot(module)(withClass(App, classes.App));
