const { UserRole } = require('../errors');
const { partnerReader } = require('../services/users/index');

exports.partnerMiddleware = async (req, _, next) => {
  try {
    const { userId } = req.params;
    const user = await partnerReader.getUser(userId);
    if (user === null || (user.role !== 'Partner' && !user.accepted)) {
      throw new UserRole();
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
