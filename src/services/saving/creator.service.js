const { Savings, User } = require('../../models');
const utils = require('../utils/utils');

exports.createSaving = async (bond, userId) => {
  const saving = { solidarityFund: 1000, baseFee: 30000, bond, userId };
  const savingTemp = new Savings(saving);
  return savingTemp.save().then(async () => {
    const { email } = await User.findById(userId);
    await utils.requestEmail(
      'You have paid the saving',
      `<b>You have paid <br /> Solidarity fund: $1.000 <br /> Base fee: $30.000 <br /> Bond: $${bond}</b>`,
      email
    );
    return { message: 'Saving created' };
  });
};
