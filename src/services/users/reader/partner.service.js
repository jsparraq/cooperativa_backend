const { User } = require('../../../models');
const utils = require('../../utils/utils');
const collections = require('../../utils/collectionsNames');

exports.getPartners = async query => {
  const usersProjection = await utils.projectQuery(collections.userCollection, ['name', 'email', 'createdAt']);
  const partners = await User.find({ role: 'Partner', ...query }, usersProjection);
  return partners;
};

exports.getUser = async userId => {
  const usersProjection = await utils.projectQuery(collections.userCollection, ['role', 'accepted']);
  const partners = await User.findOne({ _id: userId }, usersProjection);
  return partners;
};
