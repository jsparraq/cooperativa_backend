const { Loan } = require('../../../models');

exports.createLoan = async loan => {
  const loanTemp = new Loan(loan);
  await loanTemp.save();
};
