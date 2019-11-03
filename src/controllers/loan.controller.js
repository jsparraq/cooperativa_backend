const qs = require('qs');
const { loanService } = require('../services');

exports.createLoan = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { amount, month, year } = qs.parse(req.body);
    const loan = await loanService.creator.createLoan(amount, false, userId, year, month);
    res.status(201).send(loan);
  } catch (err) {
    next(err);
  }
};
