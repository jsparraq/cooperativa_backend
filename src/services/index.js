const {
  userServices,
  partnerCreatorService,
  partnerReaderService,
  partnerUpdaterService,
  partnerDeleterService,
} = require('./users');

const newsService = require('./news');
const savingService = require('./saving');
const utils = require('./utils/utils');

module.exports = {
  userServices,
  partnerCreatorService,
  partnerReaderService,
  partnerUpdaterService,
  utils,
  partnerDeleterService,
  newsService,
  savingService,
};
