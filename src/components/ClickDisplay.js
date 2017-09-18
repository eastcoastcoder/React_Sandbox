import React from 'react';
import ReactDOM from 'react-dom';

class ClickDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.counter
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <a onClick={this.handleClick} style={this.props.style}>
        This click has state counter {this.state.counter}
      </a>
    );
  }
}

export default ClickDisplay;
