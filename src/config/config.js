const dotenv = require('dotenv');

dotenv.config({ silent: process.env.NODE_ENV === 'production' });

module.exports = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
  emailPassword: process.env.EMAIL_PASSWORD,
  email: process.env.EMAIL,
  jwt: {
    secret: process.env.JWT_SECRET,
    iss: process.env.JWT_ISSUER,
    exp: process.env.JWT_EXP,
  },
};
