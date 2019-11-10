const fee = require('express').Router();

const { feeController } = require('../controllers');
const middleware = require('../middleware');

fee.post('/fee', [middleware.user.userExists, middleware.user.validateAdminHeaders], feeController.createFee);
fee.get('/fee/:userId', [middleware.user.userExists], feeController.getFee);

module.exports = fee;
