const express = require('express');
const partnerRoutes = require('./partner.route');
const authRoutes = require('./auth.route');
const newsRoutes = require('./news.route');
const savingsRoutes = require('./savings.route');
const loanRoutes = require('./loan.route');
const feeRoutes = require('./fee.route');

const router = express.Router();

router.use(partnerRoutes);
router.use(authRoutes);
router.use(newsRoutes);
router.use(savingsRoutes);
router.use(loanRoutes);
router.use(feeRoutes);

module.exports = router;
