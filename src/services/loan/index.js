const creator = require('./creator/loan.service');
const reader = require('./reader/loan.service');
const updater = require('./updater/loan.service');
const deleter = require('./deleter/loan.service');

module.exports = {
  creator,
  reader,
  updater,
  deleter,
};
