const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const loanSchema = new Schema(
  {
    value: {
      type: Number,
      require: true,
    },
    accepted: {
      type: String,
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    collection: 'Loan',
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
