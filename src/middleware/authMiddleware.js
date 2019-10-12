const { verify } = require('../services/utils/tokens');
const { UserAuth } = require('../errors');

exports.authMiddleware = async (req, _, next) => {
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
