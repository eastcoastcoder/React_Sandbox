import React from 'react';
import Radium from 'radium';

import '../css/Person.css';

const Person = ({ name, age, click, changed }) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={click}>I'm {name}, my age is {age}.</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Radium(Person);
