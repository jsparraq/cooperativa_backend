const { verify } = require('../services/utils/tokens');
const { UserAuth } = require('../errors');

exports.authMiddleware = async (req, _, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = await verify(token);
    const userId = decodedToken.sub;
    if (req.body.userId && req.body.userId !== userId) {
      throw new UserAuth();
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
