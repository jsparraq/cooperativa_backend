const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const accountSchema = new Schema(
  {
    value: {
      type: Number,
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    collection: 'Account',
    timestamps: { createdAt: true },
  }
);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
