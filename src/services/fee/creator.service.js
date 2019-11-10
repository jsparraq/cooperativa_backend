const { Fee, Loan, Account, User } = require('../../models');
const utils = require('../utils/utils');

exports.createFee = async (payment, interest, penalty, admin, loanId) => {
  const today = new Date();
  const lastFee = await Fee.find({ loanId })
    .sort({ createdAt: -1 })
    .limit(1);
  if (lastFee[0] !== undefined && lastFee[0].createdAt.getMonth() === today.getMonth()) {
    return { message: 'This partner already paid the fee in this month' };
  }
  const fee = { payment, interest, penalty, admin, loanId };
  const feeTemp = new Fee(fee);
  return feeTemp.save().then(async () => {
    const loan = await Loan.findById(loanId);
    const { email } = await User.findById(loan.userId);
    await Loan.updateOne({ _id: loanId }, { $inc: { amount: -1 * payment } });
    await Account.updateOne({ userId: loan.userId }, { $inc: { value: payment } });
    await utils.requestEmail(
      'You have paid the fee',
      `<b>The amount loan is ${loan.amount -
        payment} <br /> You have paid <br /> Payment: $${payment} <br /> Interest: $${interest} <br /> Penalty: $${penalty} <br /> Administration: $${admin}</b>`,
      email
    );
    return { message: 'Fee has been paid successfull' };
  });
};
