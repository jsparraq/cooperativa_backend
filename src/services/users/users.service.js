const bcrypt = require('bcrypt-nodejs');
const { User } = require('../../models');
const { create } = require('../authentication/token/tokens');
const { EmailPassWrong } = require('../../errors');

exports.createUser = async newUser => {
  const hashPassword = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10));
  const user = new User({
    email: newUser.email,
    name: newUser.name,
    password: hashPassword,
  });
  const created = await user.save();
  return created;
};

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
  const userLogin = await User.findOne({ email: user.email });
  const loginSuccess = await bcrypt.compareSync(user.password, userLogin.password);
  if (loginSuccess) {
    const token = create(userLogin._id);
    return { email: user.email, token };
  }
  throw new EmailPassWrong();
};
