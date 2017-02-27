import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
      // quoteText: props.quoteText,
      // quoteAuthor: props.quoteAuthor,
      // senderLink: props.senderLink,
      // quoteLink: props.quoteLink
    };
  }


  componentDidMount() {
    fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', { mode: 'no-cors' })
      .then((response) => response.text())
      .then((data) => {
        this.setState({
          data
          // quoteText: body.quoteText,
          // quoteAuthor: body.quoteAuthor,
          // senderLink: body.senderLink,
          // quoteLink: body.quoteLink
        });
        console.log('Request successful', data);
        return data;
      })
      .catch(err => console.error('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', err.toString()));
  }

  render() {
    return (
      <div>
        Test
        <h1>{this.state.data}</h1>
        {/*<h1>{this.state.quoteText}</h1>
        <h1>{this.state.quoteAuthor}</h1>
        <h1>{this.state.senderLink}</h1>
        <h1>{this.state.quoteLink}</h1>*/}
      </div>
    );
  }
}

App.propTypes = {
  quoteText: PropTypes.string,
  quoteAuthor: PropTypes.string,
  senderLink: PropTypes.string,
  quoteLink: PropTypes.string
};
