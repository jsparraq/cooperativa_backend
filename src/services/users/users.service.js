const bcrypt = require('bcrypt-nodejs');
const { User } = require('../../models');
const { UserExisting } = require('../../errors');

exports.createUser = async newUser => {
  let user = await User.findOne({
    email: newUser.email,
  });
  if (user) {
    throw new UserExisting();
  }
  const hashPassword = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10));
  user = new User({
    email: newUser.email,
    name: newUser.name,
    password: hashPassword,
  });
  user.save(newUser, function(err) {
    if (err) return new Error(`There is an error with the DB ${err}`);
  });
};
