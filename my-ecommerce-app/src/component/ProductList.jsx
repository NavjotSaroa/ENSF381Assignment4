// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products from the backend
    const fetchProducts = async () => {
      try {
        // Adjust the URL to match your Flask API endpoint for fetching products
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data); // Set the products in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <section>
      {products.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}

export default ProductList;
