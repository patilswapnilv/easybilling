import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import { Redirect } from 'react-router-dom';

// InvoiceList component
const InvoiceList = () => {
  const { user } = useContext(AuthContext);
  const [invoices, setInvoices] = useState([]);

  // Fetch invoices when component mounts
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await api.get('/invoices');
        setInvoices(response.data);
      } catch (error) {
        console.error('Failed to fetch invoices:', error.response.data.message);
      }
    };
    fetchInvoices();
  }, []);

  // Redirect to login if not authenticated
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="invoice-list-container">
      <h2>Your Invoices</h2>
      {invoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Client Name</th>
              <th>Total Amount</th>
              <th>Status</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice._id}>
                <td>{invoice._id}</td>
                <td>{invoice.clientName}</td>
                <td>${invoice.totalAmount.toFixed(2)}</td>
                <td>{invoice.status}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvoiceList;
