const loan = require('express').Router();

const { loanController } = require('../controllers');
const middleware = require('../middleware');

loan.post(
  '/loan/:userId',
  [middleware.user.userExists, middleware.user.validatePartnerParams],
  loanController.createLoan
);
loan.get('/loan', [middleware.user.userExists, middleware.user.validateAdminHeaders], loanController.getLoans);
loan.put(
  '/loan/:loanId',
  [middleware.user.userExists, middleware.user.validateAdminHeaders],
  loanController.acceptLoan
);
loan.delete(
  '/loan/:loanId',
  [middleware.user.userExists, middleware.user.validateAdminHeaders],
  loanController.deleteLoan
);

module.exports = loan;
