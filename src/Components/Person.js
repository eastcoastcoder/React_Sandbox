import React from 'react';
import '../css/Person.css';

const Person = ({ name, age, click, changed }) =>
  <div className="Person">
    <p onClick={click}>I'm {name}, my age is {age}.</p>
    <input type="text" onChange={changed} value={name}></input>
  </div>

export default Person;