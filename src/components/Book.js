import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    setInterval(this.props.onInterval, this.props.interval);
  }

  render() {
    return (
      <div>
        <div><h4>This comment says: {this.props.title}</h4></div>
      </div>
    );
  }
}

export default Book;
