const partner = require('express').Router();

const { userController } = require('../controllers');
const { authMiddleware, adminMiddleware } = require('../middleware');

partner.post('/createPartner', userController.createPartner);
partner.get('/getPartnersNotAccepted', [authMiddleware, adminMiddleware], userController.getPartnersNotAccepted);
partner.post('/acceptPartner', [authMiddleware, adminMiddleware], userController.acceptPartner);
partner.post('/denyPartner', [authMiddleware, adminMiddleware], userController.denyPartner);
partner.get('/getPartners', [authMiddleware, adminMiddleware], userController.getPartners);

module.exports = partner;
