const userService = require('./users');

const newsService = require('./news');
const savingService = require('./saving');
const utils = require('./utils/utils');
const loanService = require('./loan');

module.exports = {
  userService,
  utils,
  newsService,
  savingService,
  loanService,
};
