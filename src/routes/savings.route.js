const savings = require('express').Router();

const { savingsController } = require('../controllers');
const middleware = require('../middleware');

savings.post(
  '/savings/:userId',
  [middleware.user.userExists, middleware.user.validateAdminHeaders, middleware.user.validatePartnerParams],
  savingsController.createSaving
);

module.exports = savings;
