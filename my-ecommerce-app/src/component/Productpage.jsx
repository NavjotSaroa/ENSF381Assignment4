// src/components/Productpage.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function ProductPage() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    const exist = cartItems.find((item) => item.id === id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(cartItems.map((item) =>
        item.id === id ? { ...exist, quantity: exist.quantity - 1 } : item
      ));
    }
  };

  return (
    <div className="product-page">
      <Header />
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td><ProductList onAddToCart={handleAddToCart} /></td>
            <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} onRemove={handleRemoveFromCart} /></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default ProductPage;
