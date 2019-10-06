const dotenv = require('dotenv');

dotenv.config({ silent: process.env.NODE_ENV === 'production' });

module.exports = {
  port: process.env.PORT || 4000,
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/cooperativa',
};
