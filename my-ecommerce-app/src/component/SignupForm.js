import React, { useState } from 'react';
import axios from 'axios';  // Ensure axios is imported

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');  // To show error messages

  const handleSignup = async () => {
    if (!username || !password || !confirmPassword || !email) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        password,
        email
      });
      if (response.status === 201) {
        console.log('Signed up successfully:', username, email);
        setError('');  // Clear any previous error
        switchToLogin();  // Switch to login after successful signup
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Failed to sign up.');
      } else {
        setError('Failed to sign up.');
      }
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSignup}>Submit</button>
      </div>
      <div>
        <button onClick={switchToLogin}>Switch to Login</button>
      </div>
    </div>
  );
};

export default SignupForm;
