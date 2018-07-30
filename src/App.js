import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import Person from './Components/Person'
import './css/App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 12},
      { name: 'Bill', age: 22},
      { name: 'Dave', age: 44},
    ],
    targetPerson: 0,
    visible: true,
  }

  switchPersonHandler = () => {
    const { targetPerson, persons } = this.state;
    this.setState({
      targetPerson:
        (targetPerson < persons.length - 1)
          ? targetPerson + 1
          : 0
      });
  }

  togglePersonHandler = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  nameChangeHandler = (e) => {
    const copiedState = { ...this.state };
    const { targetPerson } = copiedState;
    copiedState.persons[targetPerson].name = e.target.value;
    this.setState(copiedState);
  }

  render() {
    const { persons, targetPerson, visible } = this.state;
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.switchPersonHandler}>Switch Person</button>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {visible &&
          <Person changed={this.nameChangeHandler} click={this.switchNameHandler} name={persons[targetPerson].name} age={persons[targetPerson].age} />
        }
      </div>
    );
  }
}

export default hot(module)(App)
