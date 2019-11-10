const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const feeSchema = new Schema(
  {
    payment: {
      type: Number,
      require: true,
    },
    interest: {
      type: Number,
      require: true,
    },
    penalty: {
      type: Number,
      require: true,
    },
    admin: {
      type: Number,
    },
    loanId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Loan',
    },
  },
  {
    collection: 'Fee',
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

const Fee = mongoose.model('Fee', feeSchema);

module.exports = Fee;
