import React, { Component } from 'react';

/* Returns Functional Component
const withClass = (WrappedComponent, className) =>
  (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
*/

// Returns Normal Component
const withClass = (WrappedComponent, className) =>
  class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };


export default withClass;
