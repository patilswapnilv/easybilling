import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around the app
const AuthProvider = ({ children }) => {
  // State to hold user data
  const [user, setUser] = useState(null);

  // Check if the user is already logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api
        .get('/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data.user))
        .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  // Function to log in the user
  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Provide user data and auth functions to children components
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
