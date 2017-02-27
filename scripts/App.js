import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) => this.setState({ data: body }))
    .catch(err => console.log(err));
  }

  render() {
    console.log(`state: ${JSON.stringify(this.state)}`);
    const users = this.state.data.results.map((value) => <li key={value.gender}>{value.gender}</li>);

    return (
      <div>Test
      <div>{users}</div>
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
