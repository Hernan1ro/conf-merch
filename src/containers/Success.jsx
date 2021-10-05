import React from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = React.useContext(AppContext);
  const { buyer } = state;
  console.log(buyer);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
