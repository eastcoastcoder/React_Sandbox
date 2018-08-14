import React from 'react';
import { css } from 'react-emotion';

import BurgerIngredient from './BurgerIngredient';

// eslint-disable-next-line
const burger = props => (
  <div className={Burger}>
    <BurgerIngredient type="bread-top" />
    <BurgerIngredient type="cheese" />
    <BurgerIngredient type="meat" />
    <BurgerIngredient type="bread-bottom" />
  </div>
);

const Burger = css`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

export default burger;
