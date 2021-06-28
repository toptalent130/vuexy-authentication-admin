const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
  },
  avatar: {
    type: String
  },
  fullName: {
    type: String,
  },
  country: {
    type: String,
  },
  contact: {
    type: String
  },
  role: {
    type: String,
    default: 'admin',
  },
  company: {
    type: String,
  },
  status: {
    type: String,
    default: 'pending'
  },
  currentPlan: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);