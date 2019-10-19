const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const savingSchema = new Schema(
  {
    solidarityFund: {
      type: Number,
      require: true,
    },
    baseFee: {
      type: Number,
      require: true,
    },
    bond: {
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
    collection: 'Saving',
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Saving = mongoose.model('Saving', savingSchema);

module.exports = Saving;
