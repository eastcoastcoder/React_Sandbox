import React from 'react';

class DangerQuizChildThree extends React.Component {
  render() {
    return <p dangerouslySetInnerHTML={{ __html: this.props.dangerous }} />;
  }
}

export default DangerQuizChildThree;
