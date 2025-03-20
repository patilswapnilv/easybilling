const mongoose = require('mongoose');

// Payment schema
const PaymentSchema = new mongoose.Schema({
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: String, // e.g., 'Credit Card', 'PayPal'
  transactionId: String,
  date: {
    type: Date,
    default: Date.now,
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Payment', PaymentSchema);
