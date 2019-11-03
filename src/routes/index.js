const express = require('express');
const partnerRoutes = require('./partner');
const authRoutes = require('./auth');
const newsRoutes = require('./news');
const savingsRoutes = require('./savings');
const loanRoutes = require('./loan');

const router = express.Router();

router.use(partnerRoutes);
router.use(authRoutes);
router.use(newsRoutes);
router.use(savingsRoutes);
router.use(loanRoutes);

module.exports = router;
