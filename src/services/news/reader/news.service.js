const { News } = require('../../../models');

exports.getNews = async () => {
  const allNews = await News.find({}).sort({ createdAt: -1 });
  return allNews;
};
