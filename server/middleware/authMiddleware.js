const jwt = require('jsonwebtoken');
const config = require('config');

// Authentication middleware
module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

  // Check if no token
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
