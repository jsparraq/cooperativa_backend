const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT || 4000,
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/cooperativa',
};
