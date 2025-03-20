const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', authController.registerUser);

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post('/login', authController.loginUser);

// @route   GET /api/auth/me
// @desc    Get logged in user info
// @access  Private
router.get('/me', authMiddleware, authController.getUser);

module.exports = router;
