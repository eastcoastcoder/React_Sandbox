import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentWillMount() {
    fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
    this.setState({
      isLoading: false,
      data: body
    }))
    .catch(err => console.log(err));
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    const { results } = this.state.data;

    return (
      <div>Test
      <div>{results.map((value) => <li key={value.email}>{value.email}</li>)}</div>
      </div>
    );
  }
}
