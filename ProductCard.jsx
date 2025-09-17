import React from 'react';

function ProductCard({ name, price, inStock }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      width: '220px',
      boxShadow: '0 2px 8px #eee'
    }}>
      <h2>{name}</h2>
      <p>Price: <strong>${price}</strong></p>
      <p>Status: {inStock ? <span style={{color: 'green'}}>In Stock</span> : <span style={{color: 'red'}}>Out of Stock</span>}</p>
    </div>
  );
}

export default ProductCard;
