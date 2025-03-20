import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Redirect, Link } from 'react-router-dom';
import api from '../services/api';

// Register component
const Register = () => {
  const { user, login } = useContext(AuthContext);

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration data to the backend
      await api.post('/auth/register', { email, password });
      // Automatically log in the user
      await login(email, password);
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
    }
  };

  // Redirect to dashboard if already logged in
  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
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
            minLength="6"
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login here</Link>.
      </p>
    </div>
  );
};

export default Register;
