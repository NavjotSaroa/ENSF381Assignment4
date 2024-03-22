import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    marginBottom: '20px',
  };

  const topContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100vw',
    textDecoration: 'underline', 
  };

  const linkStyle = { 
    textDecoration: 'underline',
    color: 'black', 
    width: '33.33%', 
    textAlign: 'center', 
  };

  return (
    <header style={headerStyle}>
      <div style={topContainerStyle}> 
        <div>
          <img src={logo} alt="Logo" style={{ height: '100px' }} />
        </div>
        <div>
          Company Name
        </div>
      </div>
      <div style={navStyle}> 
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </header>
  );
}

export default Header;
