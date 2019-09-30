const qs = require('qs');
const { userServices } = require('../services/users');

exports.createUser = async (req, res, next) => {
  const newUser = qs.parse(req.body);
  try {
    const user = await userServices.createUser(newUser);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
