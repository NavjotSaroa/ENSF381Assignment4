// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

function Header() {
  // Define styles
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '50%', 
  };

  return (
    <header style={headerStyle}>
      <div>
        <img src={logo} alt="Logo" style={{ height: '100px' }} /> {/* Adjust image size as necessary */}
      </div>
      <div style={navStyle}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
        <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>Products</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
      </div>
      <div>
        Company Name
      </div>
    </header>
  );
}

export default Header;
