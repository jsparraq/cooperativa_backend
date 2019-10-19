const partner = require('express').Router();

const { savingsController } = require('../controllers');
const { authMiddleware, adminMiddleware, partnerMiddleware } = require('../middleware');

partner.post('/createSavings', [authMiddleware, adminMiddleware, partnerMiddleware], savingsController.createSaving);

module.exports = partner;
