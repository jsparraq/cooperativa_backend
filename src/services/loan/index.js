const creator = require('./creator.service');
const reader = require('./reader.service');
const updater = require('./updater.service');
const deleter = require('./deleter.service');

module.exports = {
  creator,
  reader,
  updater,
  deleter,
};
