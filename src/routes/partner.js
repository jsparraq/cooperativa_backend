const partner = require('express').Router();

const { userController } = require('../controllers');
const { authMiddleware, adminMiddleware } = require('../middleware');

partner.get('/partner', [authMiddleware, adminMiddleware], userController.getPartners);
partner.post('/partner', userController.createPartner);
partner.put('/partner/:userId', [authMiddleware, adminMiddleware], userController.acceptPartner);
partner.delete('/partner/:userId', [authMiddleware, adminMiddleware], userController.denyPartner);

module.exports = partner;
