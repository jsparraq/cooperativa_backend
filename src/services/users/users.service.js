const bcrypt = require('bcrypt-nodejs');
const { User } = require('../../models');
const { create } = require('../utils/tokens');
const { EmailPassWrong, UserNotAccepted } = require('../../errors');
const { verify } = require('../utils/tokens');

exports.login = async user => {
  const usersProjection = {
    __v: false,
    createdAt: false,
  };
  const userLogin = await User.findOne({ email: user.email }, usersProjection).then(userMongo => userMongo.toJSON());
  const loginSuccess = await bcrypt.compareSync(user.password, userLogin.password);
  if (!userLogin.accepted) {
    throw new UserNotAccepted();
  }
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
    createdAt: false,
  };
  const decodedToken = await verify(userId);
  const user = await User.findOne({ _id: decodedToken.sub }, usersProjection);
  if (!user.accepted) {
    throw new UserNotAccepted();
  }
  return user;
};
