const mongoose = require('mongoose');

const { mongoURL } = require('../config');

exports.connectDB = function () {
    return mongoose.connect(mongoURL, { useNewUrlParser: true });
};