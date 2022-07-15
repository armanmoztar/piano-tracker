const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create user Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;