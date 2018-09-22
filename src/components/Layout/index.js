import React, { Fragment } from 'react';
import { css } from 'react-emotion';

const layout = props => (
  <Fragment>
    <main className={Content}>
      {props.children}
    </main>
  </Fragment>
);

const Content = css`
  margin-top: 16px;
`;

export default layout;
