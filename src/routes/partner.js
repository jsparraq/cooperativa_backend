const partner = require('express').Router();

const { userController } = require('../controllers');
const middleware = require('../middleware');

partner.get('/partner', [middleware.user.userExists, middleware.user.validateAdminHeaders], userController.getPartners);
partner.post('/partner', userController.createPartner);
partner.put(
  '/partner/:userId',
  [middleware.user.userExists, middleware.user.validateAdminHeaders],
  userController.acceptPartner
);
partner.delete(
  '/partner/:userId',
  [middleware.user.userExists, middleware.user.validateAdminHeaders],
  userController.denyPartner
);

module.exports = partner;
