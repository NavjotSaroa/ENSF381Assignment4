// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products.js'; // Adjust the import path to your products data

function ProductList({ onAddToCart }) {
  return (
    <section>
      {productsData.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}
export default ProductList;