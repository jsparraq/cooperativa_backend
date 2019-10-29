const { User } = require('../../../models');
const utils = require('../../utils/utils');

exports.denyPartner = async userId => {
  const partnerDeny = await User.findOne({ _id: userId }).then(partner => partner.toJSON());
  await User.deleteOne({ _id: userId });
  await utils.requestPartner(partnerDeny.email, false);
  return partnerDeny;
};
