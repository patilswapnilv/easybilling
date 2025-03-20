import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';

// Dashboard component
const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  // Redirect to login if not authenticated
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome to EasyBilling, {user.email}</h1>
        <button onClick={logout}>Logout</button>
      </header>
      <nav>
        <Link to="/invoices">View Invoices</Link>
        <Link to="/invoices/new">Create Invoice</Link>
      </nav>
      {/* Add more dashboard content as needed */}
    </div>
  );
};

export default Dashboard;
