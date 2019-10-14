const { Account } = require('../../../models');

exports.createAccount = async (value, userId) => {
  const account = { value, userId };
  const accountTemp = new Account(account);
  await accountTemp.save();
};
