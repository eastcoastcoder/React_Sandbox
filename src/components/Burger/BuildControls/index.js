import React from 'react';
import { css } from 'react-emotion';

import BuildControl from './BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = () => (
  <div className={BuildControls}>
    {controls.map(d => <BuildControl key={d.label} label={d.label} />)}
  </div>
);

const BuildControls = css`
  width: 100%;
  background-color: #CF8F2E;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding 10px 0;
`;

export default buildControls;
