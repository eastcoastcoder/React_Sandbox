import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div><h4>this comment says: {this.props.title}</h4></div>
    );
  }
}

export default Book;
