const qs = require('qs');
const { loanService } = require('../services');

exports.createLoan = async (req, res, next) => {
  try {
    const { amount, month, year, userId } = qs.parse(req.body);
    const loan = await loanService.creator.createLoan(amount, false, userId, year, month);
    res.status(201).send(loan);
  } catch (err) {
    next(err);
  }
};

exports.getLoans = async (req, res, next) => {
  try {
    const loan = await loanService.reader.getLoans(req.query);
    res.status(200).send(loan);
  } catch (err) {
    next(err);
  }
};

exports.acceptLoan = async (req, res, next) => {
  try {
    const loanAccepted = await loanService.updater.acceptLoan(req.params.loanId);
    res.send(loanAccepted);
  } catch (err) {
    next(err);
  }
};

exports.deleteLoan = async (req, res, next) => {
  try {
    const loanRejected = await loanService.deleter.denyLoan(req.params.loanId);
    res.send(loanRejected);
  } catch (err) {
    next(err);
  }
};
