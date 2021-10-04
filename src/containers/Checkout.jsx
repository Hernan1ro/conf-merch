import React from 'react';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import CheckoutItem from '../components/CheckoutItem';

import { Link } from 'react-router-dom';

const Checkout = () => {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;
  console.log(cart);

  const handleRemove = (producto) => () => {
    removeFromCart(producto);
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de pedidos</h3>
        ) : (
          <h3>No tienes pedidos</h3>
        )}
        {cart.map((item) => (
          <CheckoutItem key={item.id} item={item} handleRemove={handleRemove} />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
