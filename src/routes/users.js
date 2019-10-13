const router = require('express').Router();

const { userController } = require('../controllers');
const { authMiddleware } = require('../middleware');

router.delete('/deleteUser/:userId', authMiddleware, userController.deleteUser);
router.get('/getUsers', authMiddleware, userController.getUsers);

module.exports = router;
