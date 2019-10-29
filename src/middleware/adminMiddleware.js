const { UserRole } = require('../errors');
const { auth } = require('../services/users/index');

exports.adminMiddleware = async (req, _, next) => {
  try {
    const user = await auth.validateUser(req.headers.authorization.split(' ')[1]);
    if (user === null || user.role !== 'Admin') {
      throw new UserRole();
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
