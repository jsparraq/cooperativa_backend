const { User } = require('../../../models');
const loanService = require('../../loan/creator/loan.service');
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
  await loanService.createLoan({ value: 800000, accepted: true, userId });
  await utils.requestPartner(partnersAccepted.email, false);
  return partnersAccepted;
};