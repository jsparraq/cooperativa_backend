const qs = require('qs');
const { savingService } = require('../services');

exports.createSaving = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { bond } = qs.parse(req.body);
    const saving = await savingService.creatorService.createSaving(bond, userId);
    res.status(201).send(saving);
  } catch (err) {
    next(err);
  }
};
