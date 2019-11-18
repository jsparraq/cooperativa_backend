const qs = require('qs');
const { feeService, loanService } = require('../services');

exports.createFee = async (req, res, next) => {
  try {
    const { payment, interest, penalty, admin, loanId } = qs.parse(req.body);
    const fee = await feeService.creatorService.createFee(payment, interest, penalty, admin, loanId);
    res.status(201).send(fee);
  } catch (err) {
    next(err);
  }
};

exports.getFee = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const fee = await feeService.readerService.getFee(userId);
    res.status(200).send(fee);
  } catch (err) {
    next(err);
  }
};

exports.previousPaid = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const loans = await loanService.reader.getLoans({ userId });
    if (loans[0] === undefined) {
      res.status(200).send({ message: "You don't have fees" });
    }
    const fees = await feeService.readerService.getFees(loans);
    if (fees[0] === undefined) {
      res.status(200).send({ message: "You don't have fees" });
    }
    res.status(200).send(fees);
  } catch (err) {
    next(err);
  }
};
