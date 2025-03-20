const Invoice = require('../models/Invoice');

// Create a new invoice
exports.createInvoice = async (req, res) => {
  const { clientName, clientEmail, items } = req.body;

  // Calculate total amount
  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  try {
    const invoice = new Invoice({
      user: req.user.userId,
      clientName,
      clientEmail,
      items,
      totalAmount,
    });

    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    console.error('Error creating invoice:', err.message);
    res.status(500).send('Server error');
  }
};

// Get all invoices for the user
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user.userId });
    res.json(invoices);
  } catch (err) {
    console.error('Error fetching invoices:', err.message);
    res.status(500).send('Server error');
  }
};

// Add more controller methods as needed
