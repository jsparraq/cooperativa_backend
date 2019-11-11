const { Loan, Fee } = require('../../models');

exports.getFee = async userId => {
  const loans = await Loan.find({ userId, accepted: true })
    .sort({ createdAt: 1 })
    .limit(1);
  if (loans[0] === undefined) {
    return { message: 'This partner doesn´t have loans' };
  }
  const lastFee = await Fee.find({ loanId: loans[0]._id })
    .sort({ createdAt: -1 })
    .limit(1);
  let admin = 0;
  if (lastFee.length === 0) {
    admin = loans[0].amount * 0.01;
  }
  const fee = {
    payment: Math.ceil(loans[0].amount * 0.12),
    interest: Math.ceil(loans[0].amount * 0.02),
    admin,
    loanId: loans[0]._id,
  };
  return fee;
};
