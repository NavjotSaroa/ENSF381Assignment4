// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import HomeMainSection from './component/HomeMainSection.js';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

      </Routes>
    </Router>
  );
}

export default App;
