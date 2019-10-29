const auth = require('./users.service');
const partnerCreator = require('./creator/partner.service');
const partnerReader = require('./reader/partner.service');
const partnerUpdater = require('./updater/partner.service');
const partnerDeleter = require('./deleter/partner.service');

module.exports = {
  auth,
  partnerCreator,
  partnerReader,
  partnerUpdater,
  partnerDeleter,
};
