import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Define styles
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const topSectionStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px', // Adjust space between the top section and links
  };

  const navStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  };


  return (
    <header style={headerStyle}>
      <div style={topSectionStyle}>
        <div><img src = "../logo.svg" alt = "Logo"></img></div>
        <div>Company Name</div>
      </div>
      <nav style={navStyle}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
        <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>Products</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
      </nav>
    </header>
  );
}

export default Header;
