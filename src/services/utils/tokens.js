const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const { secret, iss, exp } = config.jwt;

exports.create = userId => {
  const token = jwt.sign(
    {
      sub: userId,
      iss,
    },
    secret,
    { expiresIn: exp }
  );
  return token;
};

exports.verify = async token => {
  try {
    return await jwt.verify(token, secret);
  } catch (err) {
    return false;
  }
};
