import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

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

const PersonStyle = css`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
      width: 450px;
  }
`;

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

export default withClass(Person, PersonStyle);
