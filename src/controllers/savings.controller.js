const qs = require('qs');
const { savingService } = require('../services');

exports.createSaving = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { bond, baseFee, solidarityFund } = qs.parse(req.body);
    const saving = await savingService.creatorService.createSaving(bond, baseFee, solidarityFund, userId);
    res.status(201).send(saving);
  } catch (err) {
    next(err);
  }
};
