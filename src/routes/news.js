const news = require('express').Router();

const { newsController } = require('../controllers');
const { authMiddleware, adminMiddleware } = require('../middleware');

news.post('/createNews', [authMiddleware, adminMiddleware], newsController.createNews);
news.get('/getNews', authMiddleware, newsController.getNews);

module.exports = news;
