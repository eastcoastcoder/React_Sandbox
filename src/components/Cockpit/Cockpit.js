import React from 'react';

import classes from './Cockpit.css';

const Cockpit = ({ persons, togglePeopleHandler, visible }) => {
  const assignedClasses = [];
  let btnClass = '';
  if (visible) {
    btnClass = classes.Red;
  }
  if (persons.length <= 2) {
    assignedClasses.push('red');
  }
  if (persons.length <= 1) {
    assignedClasses.push('bold');
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I&#39;m a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={togglePeopleHandler}>
      Toggle People
      </button>
    </div>
  );
};

export default Cockpit;
