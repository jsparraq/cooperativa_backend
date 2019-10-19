const qs = require('qs');
const { savingService } = require('../services');

exports.createSaving = async (req, res, next) => {
  try {
    const { bond, userId } = qs.parse(req.body);
    const saving = await savingService.creatorService.createSaving(bond, userId);
    res.send(saving);
  } catch (err) {
    next(err);
  }
};
