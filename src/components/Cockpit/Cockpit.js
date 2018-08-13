import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = ({ persons, togglePeopleHandler, visible, login }) => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (visible) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }
  if (persons.length <= 2) {
    assignedClasses.push('red');
  }
  if (persons.length <= 1) {
    assignedClasses.push('bold');
  }
  return (
    <Aux>
      <h1>Hi, I&#39;m a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={togglePeopleHandler}>
      Toggle People
      </button>
      <button onClick={login}>
        Log in
      </button>
    </Aux>
  );
};

export default Cockpit;
