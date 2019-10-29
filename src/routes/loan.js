const partner = require('express').Router();

const { loanController } = require('../controllers');
const { authMiddleware, partnerMiddleware } = require('../middleware');

partner.post('/loan/:userId', [authMiddleware, partnerMiddleware], loanController.createLoan);

module.exports = partner;
