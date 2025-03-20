import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import { Redirect } from 'react-router-dom';

// InvoiceForm component
const InvoiceForm = () => {
  const { user } = useContext(AuthContext);

  // State for form inputs
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);
  const [redirect, setRedirect] = useState(false);

  // Handle adding a new item row
  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, price: 0 }]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const invoiceData = {
      clientName,
      clientEmail,
      items,
    };
    try {
      await api.post('/invoices', invoiceData);
      setRedirect(true);
    } catch (error) {
      console.error('Invoice creation failed:', error.response.data.message);
    }
  };

  // Redirect to invoice list after successful creation
  if (redirect) {
    return <Redirect to="/invoices" />;
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="invoice-form-container">
      <h2>Create Invoice</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Client Name:
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </label>
        <label>
          Client Email:
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
          />
        </label>
        <h3>Items</h3>
        {items.map((item, index) => (
          <div key={index} className="item-row">
            <input
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].description = e.target.value;
                setItems(newItems);
              }}
              required
            />
            <input
              type="number"
              min="1"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].quantity = e.target.value;
                setItems(newItems);
              }}
              required
            />
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="Price"
              value={item.price}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].price = e.target.value;
                setItems(newItems);
              }}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addItem}>
          Add Item
        </button>
        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
};

export default InvoiceForm;
