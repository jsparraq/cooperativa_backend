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

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await userServices.deleteUser(req.params.userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (_, res, next) => {
  try {
    const users = await userServices.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const user = qs.parse(req.body);
  try {
    const response = await userServices.login(user);
    res.send(response);
  } catch (err) {
    next(err);
  }
};
