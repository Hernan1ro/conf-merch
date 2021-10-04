import React from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyers: [...state.buyers, payload],
    });
  };

  return { addToCart, removeFromCart, state, addToBuyer };
};

export default useInitialState;
