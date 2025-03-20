const mongoose = require('mongoose');

// User schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  // Add more fields as needed (e.g., name, company, etc.)
});

module.exports = mongoose.model('User', UserSchema);
