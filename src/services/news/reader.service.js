const { News } = require('../../models');

exports.getNews = async () => {
  const newsProjection = {
    __v: false,
  };
  const allNews = await News.find({}, newsProjection).sort({ createdAt: -1 });
  return allNews;
};
