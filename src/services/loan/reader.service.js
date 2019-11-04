const { Loan } = require('../../models');

exports.getLoans = async query => {
  const Loans = await Loan.find(query, '-accepted -__v').populate('userId', ['name', 'email']);
  return Loans;
};
