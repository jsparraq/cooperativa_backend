const partner = require('express').Router();

const { loanController } = require('../controllers');
const middleware = require('../middleware');

partner.post(
  '/loan/:userId',
  [middleware.user.userExists, middleware.user.validatePartnerParams],
  loanController.createLoan
);
partner.get('/loan', [middleware.user.userExists, middleware.user.validateAdminHeaders], loanController.createLoan);

module.exports = partner;
