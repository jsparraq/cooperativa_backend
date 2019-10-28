const partner = require('express').Router();

const { savingsController } = require('../controllers');
const { authMiddleware, adminMiddleware, partnerMiddleware } = require('../middleware');

partner.post('/savings/:userId', [authMiddleware, adminMiddleware, partnerMiddleware], savingsController.createSaving);

module.exports = partner;
