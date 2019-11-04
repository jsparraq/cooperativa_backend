const { News } = require('../../models');

exports.createNews = async text => {
  const news = { text };
  const newsTemp = new News(news);
  return newsTemp.save().then(newsMongo => newsMongo.toJSON());
};
