// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import HomeMainSection from './component/HomeMainSection.js';
import ProductPage from './component/Productpage.jsx';


import './App.css';
import LoginPage from './component/LoginPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
