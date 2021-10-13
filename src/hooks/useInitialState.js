import React from 'react';
import axios from 'axios';
import initialState from '../initialState';

const API = 'http://localhost:1337/products';
const API2 = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API2);
      setProducts(response.data);
    };
    getData();
  }, []);

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
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
    addNewOrder,
    products,
  };
};

export default useInitialState;
