import React from 'react';
import { css } from 'react-emotion';

const backdrop = ({ show, clicked }) => (
  show
    ? <div className={Backdrop} onClick={clicked} />
    : null
);

const Backdrop = css`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default backdrop;

