const dotenv = require('dotenv');

dotenv.config({ silent: process.env.NODE_ENV === 'production' });

module.exports = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
  jwt: {
    secret: process.env.JWT_SECRET,
    iss: process.env.JWT_ISSUER,
    exp: process.env.JWT_EXP,
  },
};
