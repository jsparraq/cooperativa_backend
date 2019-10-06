const dotenv = require('dotenv');

dotenv.config({ silent: process.env.NODE_ENV === 'production' });

module.exports = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
};
