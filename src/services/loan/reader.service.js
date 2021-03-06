const { Loan, Fee } = require('../../models');

exports.getLoans = async query => {
  const Loans = await Loan.find(query, '-accepted -__v')
    .populate('userId', ['name', 'email'])
    .lean();
  return Loans;
};

exports.getLoan = async loanId => {
  const loan = await Loan.findById(loanId, '-__v -createdAt -userId -month -year').then(loanTemp => loanTemp.toJSON());
  if (!loan.accepted) {
    return { message: "This loan hasn't been accepted" };
  }
  const Fees = await Fee.aggregate([
    {
      $group: {
        _id: '$loanId',
        totalPaid: { $sum: '$payment' },
      },
    },
  ]);
  const totalAmount = Fees.filter(fee => fee._id.toJSON() === loanId)[0].totalPaid + loan.amount;
  return {
    ...loan,
    ...{ totalAmount },
  };
};
