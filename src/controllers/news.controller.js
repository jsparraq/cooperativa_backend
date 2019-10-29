const qs = require('qs');

const { newsService } = require('../services');

exports.createNews = async (req, res, next) => {
  const newNews = qs.parse(req.body);
  try {
    const news = await newsService.creator.createNews(newNews.text);
    res.status(201).send(news);
  } catch (err) {
    next(err);
  }
};

exports.getNews = async (_, res, next) => {
  try {
    const news = await newsService.reader.getNews();
    res.send(news);
  } catch (err) {
    next(err);
  }
};
