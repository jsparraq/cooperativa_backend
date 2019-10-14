const { User } = require('../../../models');
const loanService = require('../../loan');
const accountService = require('../../account');
const utils = require('../../utils/utils');

exports.acceptPartner = async userId => {
  const usersProjection = {
    _id: false,
    __v: false,
    createdAt: false,
    password: false,
    role: false,
    accepted: false,
  };
  const partnersAccepted = await User.findOne({ _id: userId }, usersProjection).then(partner => partner.toJSON());

  await User.updateOne({ _id: userId }, { $set: { accepted: true } });
  await loanService.creatorService.createLoan(800000, true, userId);
  await accountService.creatorService.createAccount(-800000, userId);
  await utils.requestPartner(partnersAccepted.email, true);
  return partnersAccepted;
};
