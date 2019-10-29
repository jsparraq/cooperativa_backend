const { Loan } = require('../../../models');

exports.createLoan = async (value, accepted, userId, date) => {
  const loan = { value, accepted, userId, date };
  const loanTemp = new Loan(loan);
  return loanTemp.save().then(() => ({ message: 'Loan created' }));
};
