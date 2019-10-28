const qs = require('qs');
const { UserRole } = require('../errors');
const { partnerReaderService } = require('../services/users/index');

exports.partnerMiddleware = async (req, _, next) => {
  try {
    const { userId } = req.params;
    const user = await partnerReaderService.getUser(userId);
    if (user === null || user.role !== 'Partner') {
      throw new UserRole();
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
