const { Fee } = require('../../models');

exports.createFee = async (payment, interest, penalty, admin, loanId) => {
  const fee = { payment, interest, penalty, admin, loanId };
  const feeTemp = new Fee(fee);
  await feeTemp.save();
};
