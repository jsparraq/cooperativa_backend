const qs = require('qs');

const { newsService } = require('../services');

exports.createNews = async (req, res, next) => {
  const newNews = qs.parse(req.body);
  try {
    const news = await newsService.creatorService.createNews(newNews.text);
    res.send(news);
  } catch (err) {
    next(err);
  }
};

exports.getNews = async (_, res, next) => {
  try {
    const news = await newsService.readerService.getNews();
    res.send(news);
  } catch (err) {
    next(err);
  }
};
