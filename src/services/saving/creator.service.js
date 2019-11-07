const { Savings, User, Account } = require('../../models');
const utils = require('../utils/utils');

exports.createSaving = async (bond, baseFee, solidarityFund, userId) => {
  const today = new Date();
  const lastSaving = await Savings.find({ userId })
    .sort({ createdAt: -1 })
    .limit(1);
  if (lastSaving[0].createdAt.getMonth() === today.getMonth()) {
    return { message: 'This partner already paid the saving in this month' };
  }
  const saving = { solidarityFund, baseFee, bond, userId };
  const savingTemp = new Savings(saving);
  return savingTemp.save().then(async () => {
    const { email } = await User.findById(userId);
    await utils.requestEmail(
      'You have paid the saving',
      `<b>You have paid <br /> Solidarity fund: $${solidarityFund} <br /> Base fee: $${baseFee} <br /> Bond: $${bond}</b>`,
      email
    );
    await Account.updateOne({ userId }, { $inc: { value: baseFee } });
    return { message: 'Saving created' };
  });
};
