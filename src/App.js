import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Radium, { StyleRoot } from 'radium';

import Person from './Components/Person';
import './css/App.css';

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
    const style = {
      backgroundColor: !visible ? 'green' : 'red',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': !visible
        ? {
          backgroundColor: 'lightgreen',
          color: 'black',
        }
        : {
          backgroundColor: 'lightred',
          color: 'black',
        }
    };

    const classes = [];
    if (persons.length <= 2) {
      classes.push('red');
    }
    if (persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I&#39;m a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            style={style}
            onClick={this.togglePeopleHandler}>
          Toggle People
          </button>
          {visible &&
            persons.map((person, index) => (
              <Person
                key={person.id}
                changed={e => this.nameChangeHandler(e, person.id)}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            ))}
        </div>
      </StyleRoot>
    );
  }
}

export default hot(module)(Radium(App));
