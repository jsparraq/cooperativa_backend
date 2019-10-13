const { User } = require('../../../models');
const utils = require('../../utils/utils');

exports.denyPartner = async userId => {
  const usersProjection = {
    _id: false,
    __v: false,
    createdAt: false,
    password: false,
    role: false,
    accepted: false,
  };

  const partnerDeny = await User.findOne({ _id: userId }, usersProjection).then(partner => partner.toJSON());
  await User.deleteOne({ _id: userId });
  await utils.requestPartner(partnerDeny.email, false);
  return partnerDeny;
};
