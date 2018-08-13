import React from 'react';
import { css } from 'react-emotion';

import Aux from '../../hoc/Aux';

const Cockpit = ({ persons, togglePeopleHandler, visible, login }) => {
  const assignedClasses = [];
  let btnClass = Button;
  if (visible) {
    btnClass = `${Button} ${Red}`;
  }
  if (persons.length <= 2) {
    assignedClasses.push(red);
  }
  if (persons.length <= 1) {
    assignedClasses.push(bold);
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

const red = css`
  color: red;
`;

const bold = css`
  font-weight: bold;
`;

const Button = css`
  border: 1px solid blue;
  padding: 16px;
  background-color: green;
  font: inherit;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    color: black;
  }
  .${Red}
`;

const Red = css`
  background-color: red;
  &:hover {
    background-color: salmon;
    color: black;
  }
`;


export default Cockpit;
