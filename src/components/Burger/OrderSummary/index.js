import React, { Fragment } from 'react';

const orderSummary = (props) => {
  const ingredientSummary =
  Object.keys(props.ingredients)
    .map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}: {props.ingredients[igKey]}</span>
      </li>));

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Your Order</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout</p>
    </Fragment>
  );
};

export default orderSummary;
