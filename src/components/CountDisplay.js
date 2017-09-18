import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class CountDisplay extends React.Component {
  componentDidUpdate() {
    const node = $(ReactDOM.findDOMNode(this));
    node.slideUp();
    node.slideDown();
  }
  render() {
    return (
      <h1 style={this.props.style}>This has state counter {this.props.counter}</h1>
    );
  }
}

export default CountDisplay;
