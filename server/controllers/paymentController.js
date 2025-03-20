const Payment = require('../models/Payment');
const { createPaymentIntent } = require('../utils/paymentGateway');

// Process a payment
exports.processPayment = async (req, res) => {
  const { invoiceId, paymentMethodId } = req.body;

  try {
    // Fetch the invoice
    const invoice = await Invoice.findById(invoiceId);
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });

    // Create payment intent with Stripe
    const paymentIntent = await createPaymentIntent(invoice.totalAmount * 100); // Convert to cents

    // Save payment details
    const payment = new Payment({
      invoice: invoiceId,
      amount: invoice.totalAmount,
      paymentMethod: 'Credit Card', // Update based on actual method
      transactionId: paymentIntent.id,
    });

    await payment.save();

    // Update invoice status
    invoice.status = 'Paid';
    await invoice.save();

    res.json({ message: 'Payment successful', payment });
  } catch (err) {
    console.error('Error processing payment:', err.message);
    res.status(500).send('Server error');
  }
};
