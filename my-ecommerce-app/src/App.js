// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/Homepage.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import HomeMainSection from './component/HomeMainSection.js';
import ProductPage from './component/Productpage.jsx';
import LoginPage from './component/LoginPage.js';

import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Simulate the login process
    const handleLogin = (isLoggedIn) => {
        setIsAuthenticated(isLoggedIn);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/products" element={
                    isAuthenticated ? <ProductPage /> : <Navigate to="/login" />
                } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
