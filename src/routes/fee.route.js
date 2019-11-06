const fee = require('express').Router();

const { feeController } = require('../controllers');
const middleware = require('../middleware');

fee.post('/fee', [middleware.user.userExists, middleware.user.validateAdminHeaders], feeController.createFee);

module.exports = fee;
