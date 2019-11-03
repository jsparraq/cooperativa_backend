const partner = require('express').Router();

const { savingsController } = require('../controllers');
const middleware = require('../middleware');

partner.post(
  '/savings/:userId',
  [middleware.user.userExists, middleware.user.validateAdminHeaders, middleware.user.validatePartnerParams],
  savingsController.createSaving
);

module.exports = partner;
