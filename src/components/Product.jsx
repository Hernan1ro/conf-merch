import React from 'react';

const Product = ({ producto }) => {
  return (
    <div className="Products-item">
      <img src={producto.image} alt={producto.title} />
      <div className="Products-item-info">
        <h2>
          {producto.title}
          <span>
            ${''}
            {producto.price}
          </span>
        </h2>
        <p>{producto.description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};

export default Product;
