const auth = require('./users.service');
const partnerCreator = require('./creator.service');
const partnerReader = require('./reader.service');
const partnerUpdater = require('./updater.service');
const partnerDeleter = require('./deleter.service');

module.exports = {
  auth,
  partnerCreator,
  partnerReader,
  partnerUpdater,
  partnerDeleter,
};
