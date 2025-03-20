const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST /api/invoices
// @desc    Create a new invoice
// @access  Private
router.post('/', authMiddleware, invoiceController.createInvoice);

// @route   GET /api/invoices
// @desc    Get all invoices for the user
// @access  Private
router.get('/', authMiddleware, invoiceController.getInvoices);

// Add more routes as needed (e.g., GET /:id, PUT /:id, DELETE /:id)

module.exports = router;
