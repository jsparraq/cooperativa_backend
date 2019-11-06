const news = require('express').Router();

const { newsController } = require('../controllers');
const middleware = require('../middleware');

news.get('/news', middleware.user.userExists, newsController.getNews);
news.post('/news', [middleware.user.userExists, middleware.user.validateAdminHeaders], newsController.createNews);

module.exports = news;
