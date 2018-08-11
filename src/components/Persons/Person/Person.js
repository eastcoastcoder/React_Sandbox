import React from 'react';

import classes from './Person.css';

const Person = ({ name, age, click, changed }) => (
  <div className={classes.Person}>
    <p onClick={click}>I'm {name}, my age is {age}.</p>
    <input type="text" onChange={changed} value={name} />
  </div>
);

/*
const Person = ({ name, age, click, changed }) => [
  <p key ="1" onClick={click}>I'm {name}, my age is {age}.</p>,
  <input key= "2" type="text" onChange={changed} value={name} />
];
*/

export default Person;
