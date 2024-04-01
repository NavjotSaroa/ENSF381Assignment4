import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = ({ onLogin }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const switchToSignup = () => {
    setShowLoginForm(false);
  };

  const switchToLogin = () => {
    setShowLoginForm(true);
  };

  return (
    <div>
      {showLoginForm ? (
        <LoginForm onLogin={onLogin} switchToSignup={switchToSignup} />
      ) : (
        <SignupForm switchToLogin={switchToLogin} />
      )}
    </div>
  );
};

export default LoginPage;
