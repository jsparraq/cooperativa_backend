const { Loan } = require('../../models');

exports.acceptLoan = async loanId =>
  Loan.updateOne(
    {
      _id: loanId,
    },
    {
      $set: {
        accepted: true,
      },
    }
  ).then(() => ({ message: 'The loan has been accepted' }));
