const bcrypt = require('bcrypt-nodejs');
const { User } = require('../../models');
const { create } = require('../utils/tokens');
const { EmailPassWrong } = require('../../errors');
const { verify } = require('../utils/tokens');

exports.getUsers = async () => {
  const usersProjection = {
    __v: false,
    password: false,
  };
  const users = await User.find({}, usersProjection);
  return users;
};

exports.deleteUser = async id => {
  const user = await User.findByIdAndRemove(id);
  return user;
};

exports.login = async user => {
  const usersProjection = {
    __v: false,
  };
  const userLogin = await User.findOne({ email: user.email }, usersProjection);
  const loginSuccess = await bcrypt.compareSync(user.password, userLogin.password);
  if (loginSuccess) {
    delete userLogin.password;
    const token = create(userLogin._id);
    return { user: userLogin, token };
  }
  throw new EmailPassWrong();
};

exports.validateUser = async userId => {
  const usersProjection = {
    __v: false,
    password: false,
  };
  const decodedToken = await verify(userId);
  const user = await User.findOne({ _id: decodedToken.sub }, usersProjection);
  return user;
};
