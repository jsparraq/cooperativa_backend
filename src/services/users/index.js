const userServices = require('./users.service');
const partnerCreatorService = require('./creator/partner.service');
const partnerReaderService = require('./reader/partner.service');
const partnerUpdaterService = require('./updater/partner.service');
const partnerDeleterService = require('./deleter/partner.service');

module.exports = {
  userServices,
  partnerCreatorService,
  partnerReaderService,
  partnerUpdaterService,
  partnerDeleterService,
};
