const { adminMiddleware } = require('./adminMiddleware');
const { authMiddleware } = require('./authMiddleware');
const { partnerMiddleware } = require('./partnerMiddleware');

module.exports = { adminMiddleware, authMiddleware, partnerMiddleware };
