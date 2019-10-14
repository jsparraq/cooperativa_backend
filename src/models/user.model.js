const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    accepted: {
      type: Boolean,
      require: true,
    },
  },
  {
    collection: 'User',
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
