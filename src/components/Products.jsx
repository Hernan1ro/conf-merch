import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';

const Products = ({ products }) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((producto) => {
          return <Product key={producto.id} producto={producto} />;
        })}
      </div>
    </div>
  );
};

export default Products;
