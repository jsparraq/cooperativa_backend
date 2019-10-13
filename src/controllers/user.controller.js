const qs = require('qs');
const {
  userServices,
  partnerCreatorService,
  partnerReaderService,
  partnerUpdaterService,
  partnerDeleterService,
} = require('../services');

exports.createPartner = async (req, res, next) => {
  const newUser = qs.parse(req.body);
  try {
    const user = await partnerCreatorService.createPartner(newUser);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.getPartnersNotAccepted = async (_, res, next) => {
  try {
    const partnersNotAccepted = await partnerReaderService.getPartnersNotAccepted();
    res.json(partnersNotAccepted);
  } catch (err) {
    next(err);
  }
};

exports.acceptPartner = async (req, res, next) => {
  const partner = qs.parse(req.body);
  try {
    const partnersAccepted = await partnerUpdaterService.acceptPartner(partner.userId);
    res.json(partnersAccepted);
  } catch (err) {
    next(err);
  }
};

exports.denyPartner = async (req, res, next) => {
  const partner = qs.parse(req.body);
  try {
    const partnersDeny = await partnerDeleterService.denyPartner(partner.userId);
    res.json(partnersDeny);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const user = qs.parse(req.body);
  try {
    const response = await userServices.login(user);
    res.send(response);
  } catch (err) {
    next(err);
  }
};

exports.validateUser = async (req, res, next) => {
  const headers = qs.parse(req.headers);
  try {
    const response = await userServices.validateUser(headers.authorization.split(' ')[1]);
    res.send(response);
  } catch (err) {
    next(err);
  }
};
