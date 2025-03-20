const Stripe = require('stripe');
const config = require('config');

const stripe = Stripe(config.get('stripeSecretKey'));

// Create a payment intent
exports.createPaymentIntent = async (amount, currency = 'usd') => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    return paymentIntent;
  } catch (err) {
    console.error('Error creating payment intent:', err.message);
    throw err;
  }
};

// Handle other payment-related functions as needed
