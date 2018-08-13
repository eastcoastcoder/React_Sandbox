import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  inputElement = React.createRef();

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    // const { authenticated } = this.props;
    const { name, age, click, changed } = this.props;
    return (
      <Aux>
        <AuthContext.Consumer>
          {authenticated => authenticated && <p>I&apos;m authenticated.</p>}
        </AuthContext.Consumer>
        {/* eslint-disable-next-line */}
        <p onClick={click}>I&apos;m {name}, my age is {age}.</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={changed}
          value={name} />
      </Aux>
    );
  }
}

/*
const Person = ({ name, age, click, changed }) => [
  <p key ="1" onClick={click}>I'm {name}, my age is {age}.</p>,
  <input key= "2" type="text" onChange={changed} value={name} />
];
*/
/* eslint-disable */
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
/* eslint-enable */

export default withClass(Person, classes.Person);
