const bcrypt = require('bcrypt-nodejs');
const { User } = require('../../models');

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
