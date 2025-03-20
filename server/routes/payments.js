const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST /api/payments
// @desc    Process a payment
// @access  Private
router.post('/', authMiddleware, paymentController.processPayment);

module.exports = router;
