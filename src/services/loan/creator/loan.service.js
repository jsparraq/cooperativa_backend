const { Loan } = require('../../../models');

exports.createLoan = async (value, accepted, userId) => {
  const loan = { value, accepted, userId };
  const loanTemp = new Loan(loan);
  await loanTemp.save();
};
