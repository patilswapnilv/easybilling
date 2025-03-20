import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Redirect, Link } from 'react-router-dom';

// Login component
const Login = () => {
  const { user, login } = useContext(AuthContext);

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  // Redirect to dashboard if already logged in
  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <h2>Login to EasyBilling</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default Login;
