const { Loan } = require('../../models');
const utils = require('../utils/utils');

exports.denyLoan = async loanId => {
  const Loans = await Loan.findOne({ _id: loanId }, '-accepted -__v').populate('userId', ['email']);
  return Loan.deleteOne({ _id: loanId }).then(async () => {
    await utils.requestEmail(
      'Loan requested',
      `<b>Your loan has been reject <br /> Amount: ${Loans.amount} <br/> Date: ${utils.months[Loans.month]} (${
        Loans.year
      }) </b>`,
      Loans.userId.email
    );
    return { message: 'Success' };
  });
};
