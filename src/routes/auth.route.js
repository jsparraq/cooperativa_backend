const auth = require('express').Router();
const { userController } = require('../controllers');

auth.post('/login', userController.login);
auth.get('/token', userController.validateUser);

module.exports = auth;
