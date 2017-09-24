import React from 'react';
import { Input, Button } from 'react-materialize';

class ClickDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.counter,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  focusTextInput() {
    this.textInput.focus();
  }
  render() {
    return (
      <div>
        <a onClick={this.handleClick} style={this.props.style}>
        This click has state counter {this.state.counter}
        </a>
        <Input type="text" defaultValue="defaultValue is specified" onChange={this.handleChange} />
        <input type="text" ref={input => { this.textInput = input; }} />
        <Button type="button" onClick={this.focusTextInput} >
        Jump to the Second Input
        </Button>
      </div>
    );
  }
}

export default ClickDisplay;
