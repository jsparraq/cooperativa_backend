const bcrypt = require('bcrypt-nodejs');
const { User } = require('../../models');

exports.createPartner = async newUser => {
  const hashPassword = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10));
  const user = new User({
    email: newUser.email,
    name: newUser.name,
    password: hashPassword,
    role: 'Partner',
    accepted: false,
  });
  const created = await user.save().then(userMongo => userMongo.toJSON());
  delete created.password;
  delete created.__v;
  delete created._id;
  return created;
};
