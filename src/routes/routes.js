const { userController } = require('../controllers');

module.exports = function(app) {
  app.post('/createUser', userController.createUser);
};
