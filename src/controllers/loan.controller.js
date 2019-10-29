const qs = require('qs');
const { loanService } = require('../services');

exports.createLoan = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { value, date } = qs.parse(req.body);
    const loan = await loanService.creator.createLoan(value, false, userId, date);
    res.status(201).send(loan);
  } catch (err) {
    next(err);
  }
};
