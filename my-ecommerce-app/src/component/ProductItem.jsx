import React, { Component, useState } from 'react';
function ProductItem({ product, onAddToCart }) {
  const [showDetails, setShowDetails] = useState(false);
  const productImage = require(`./product${product.id}.jpg`); 

  return (
    <div>
      <img src={productImage} alt={product.name} style={{ width: '300px', height: '300px' }} />
      <div onMouseEnter={() => setShowDetails(true)}
           onMouseLeave={() => setShowDetails(false)}>
        {product.name}
        {showDetails && <p>{product.description}</p>}
      </div>
      <div>${product.price}</div>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
export default ProductItem;
