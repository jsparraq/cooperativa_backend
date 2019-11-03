const { auth } = require('../services/users');
const { UserRole } = require('../errors');
const { partnerReader } = require('../services/users');
const { UserAuth } = require('../errors');
const { verify } = require('../services/utils/tokens');

exports.validatePartnerParams = async (req, _, next) => {
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

exports.validateAdminHeaders = async (req, _, next) => {
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

exports.userExists = async (req, _, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = await verify(token);
    const userId = decodedToken.sub;
    if (req.headers.userid === undefined && req.headers.userid !== userId) {
      throw new UserAuth();
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
