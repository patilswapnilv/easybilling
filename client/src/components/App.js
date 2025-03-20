import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from '../context/AuthContext';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import InvoiceForm from './InvoiceForm';
import InvoiceList from './InvoiceList';

// Main App component with routing
function App() {
  return (
    <AuthProvider>
      {/* Router for navigation */}
      <Router>
        <Switch>
          {/* Public Routes */}
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />

          {/* Private Routes */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/invoices/new" component={InvoiceForm} />
          <Route path="/invoices" component={InvoiceList} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
