import React from 'react';
import { css } from 'react-emotion';

const buildControl = ({ label, added, removed, disabled }) => (
  <div className={BuildControl}>
    <div className={Label}>{label}</div>
    <button className={Less} onClick={removed} disabled={disabled}>Less</button>
    <button className={More} onClick={added}>More</button>
  </div>
);

const BuildControl = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  & button {
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border 1px solid #AA6817;
    cursor: pointer;
    outline: none;
  }
  & button:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }
  & button:hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }
  .${Less}
  .${More}
`;

const Less = css`
  background-color: #d39952;
    color: white;
  }
  &:hover,
  &:active {
    background-color: #daa972;
    color: white;
  }
`;

const More = css`
  background-color: #8F5E1E;
  color: white;
  &:hover,
  &:active {
    background-color: #99703f;
    color: white;
  }
`;

const Label = css`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export default buildControl;
