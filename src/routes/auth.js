const auth = require('express').Router();
const { userController } = require('../controllers');

auth.post('/login', userController.login);
auth.get('/validateUser', userController.validateUser);

module.exports = auth;
