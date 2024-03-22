import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

function Header() {
  
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%', 
    marginTop: '100px'
  };
  const logoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  };
  return (
    <header style={headerStyle}>
      <div>
        <img src={logo} alt="Logo" style={{ height: '100px' }} /> 
      </div>
      <div style={navStyle}>
        <Link to="/" style={{ textDecoration: 'underline', color: 'blue' }}>Home</Link>
        <Link to="/products" style={{ textDecoration: 'underline', color: 'blue' }}>Products</Link>
        <Link to="/login" style={{ textDecoration: 'underline', color: 'blue' }}>Login</Link>
      </div>
      <div>
        Company Name
      </div>
    </header>
  );
}

export default Header;