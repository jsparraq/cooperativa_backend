const qs = require('qs');
const { UserRole } = require('../errors');
const { partnerReaderService } = require('../services/users/index');

exports.partnerMiddleware = async (req, _, next) => {
  try {
    const body = qs.parse(req.body);
    const user = await partnerReaderService.getUser(body.userId);
    if (user === null || user.role !== 'Partner') {
      throw new UserRole();
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
