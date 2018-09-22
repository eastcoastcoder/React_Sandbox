import React from 'react';
import { css } from 'react-emotion';

const myComponent = () => (
  <div className={MyComponent}>
    Here is myComponent
  </div>
);

const MyComponent = css`
  width: 100%;
  margin: auto;
  height: 250px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

export default myComponent;
