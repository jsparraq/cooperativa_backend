const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const accountSchema = new Schema(
  {
    value: {
      type: Number,
      require: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User',
    },
  },
  {
    collection: 'Account',
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
