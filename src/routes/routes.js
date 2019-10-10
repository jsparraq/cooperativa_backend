const { userController } = require('../controllers');

module.exports = function(app) {
  app.post('/createUser', userController.createUser);
  app.post('/login', userController.login);

  app.delete('/deleteUser/:userId', userController.deleteUser);
  app.get('/getUsers', userController.getUsers);
};
