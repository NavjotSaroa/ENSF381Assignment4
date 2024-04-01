import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const LoginForm = ({ onLogin, switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();  // Initialize useNavigate

  const handleLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      setIsLoading(false);
      if (response.status === 200) {
        onLogin(true);
        navigate('/products');  // Navigate to products page on success
      }
    } catch (err) {
      setIsLoading(false);
      const errorMessage = err.response?.data?.error || 'Failed to login';
      setError(errorMessage);
      onLogin(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <button onClick={handleLogin} disabled={isLoading || !username || !password}>
        {isLoading ? 'Logging In...' : 'Log In'}
      </button>
      <button onClick={switchToSignup} disabled={isLoading}>
        Sign Up
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default LoginForm;
