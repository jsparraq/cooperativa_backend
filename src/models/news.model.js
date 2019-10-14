const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const newsSchema = new Schema(
  {
    text: {
      type: String,
      require: true,
    },
  },
  {
    collection: 'News',
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const News = mongoose.model('News', newsSchema);

module.exports = News;
