import React, { Component } from 'react';

import Layout from '../components/Layout';
import MyComponent from '../components/MyComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MyComponent />
        </Layout>
      </div>
    );
  }
}

export default App;
