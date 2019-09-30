const mongoose = require('mongoose');

const { mongoURL } = require('../config/config');

mongoose.set('useCreateIndex', true);

exports.connectDB = function() {
  return mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
};
