const partner = require('express').Router();

const { userController } = require('../controllers');
const { authMiddleware, adminMiddleware } = require('../middleware');

partner.post('/createPartner', userController.createPartner);
partner.get('/getPartnersNotAccepted', [authMiddleware, adminMiddleware], userController.getPartnersNotAccepted);

module.exports = partner;
