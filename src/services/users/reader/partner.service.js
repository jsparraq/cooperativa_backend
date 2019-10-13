const { User } = require('../../../models');

exports.getPartnersNotAccepted = async () => {
  const usersProjection = {
    __v: false,
    password: false,
    updatedAt: false,
  };
  const partnersNotAccepted = await User.find({ accepted: false, role: 'Partner' }, usersProjection);
  return partnersNotAccepted;
};
