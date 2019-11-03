const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const loanSchema = new Schema(
  {
    amount: {
      type: Number,
      require: true,
    },
    accepted: {
      type: Boolean,
      require: true,
    },
    month: {
      type: Number,
      require: true,
    },
    year: {
      type: Number,
      require: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    collection: 'Loan',
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
