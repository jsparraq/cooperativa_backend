const { Loan } = require('../../../models');

exports.createLoan = async (amount, accepted, userId, year, month) => {
  const loan = {
    amount,
    accepted,
    month,
    year,
    userId,
  };
  const loanTemp = new Loan(loan);
  return loanTemp.save().then(() => ({
    message: 'Loan created',
  }));
};
