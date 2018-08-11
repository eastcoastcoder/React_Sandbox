import React from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

const Person = ({ name, age, click, changed }) => (
  <Aux>
    <p onClick={click}>I'm {name}, my age is {age}.</p>
    <input type="text" onChange={changed} value={name} />
  </Aux>
);

/*
const Person = ({ name, age, click, changed }) => [
  <p key ="1" onClick={click}>I'm {name}, my age is {age}.</p>,
  <input key= "2" type="text" onChange={changed} value={name} />
];
*/

export default withClass(Person, classes.Person);
