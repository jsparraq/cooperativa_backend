const { userController } = require('../controllers');
const { authMiddleware } = require('../middleware/authMiddleware');

module.exports = function(app) {
  app.post('/createUser', userController.createUser);
  app.post('/login', userController.login);

  app.delete('/deleteUser/:userId', authMiddleware, userController.deleteUser);
  app.get('/getUsers', authMiddleware, userController.getUsers);
};
