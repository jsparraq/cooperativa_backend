const news = require('express').Router();

const { newsController } = require('../controllers');
const { authMiddleware, adminMiddleware } = require('../middleware');

news.get('/news', authMiddleware, newsController.getNews);
news.post('/news', [authMiddleware, adminMiddleware], newsController.createNews);

module.exports = news;
