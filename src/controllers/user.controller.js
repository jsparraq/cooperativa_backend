const qs = require('qs');
const {
  userServices,
  partnerCreatorService,
  partnerReaderService,
  partnerUpdaterService,
  partnerDeleterService,
} = require('../services');

const { UserAuth } = require('../errors');

exports.createPartner = async (req, res, next) => {
  try {
    const newUser = qs.parse(req.body);
    const user = await partnerCreatorService.createPartner(newUser);
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
};

exports.getPartners = async (req, res, next) => {
  try {
    const partners = await partnerReaderService.getPartners(req.query);
    res.send(partners);
  } catch (err) {
    next(err);
  }
};

exports.acceptPartner = async (req, res, next) => {
  try {
    const partnersAccepted = await partnerUpdaterService.acceptPartner(req.params.userId);
    res.send(partnersAccepted);
  } catch (err) {
    next(err);
  }
};

exports.denyPartner = async (req, res, next) => {
  try {
    await partnerDeleterService.denyPartner(req.params.userId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = qs.parse(req.body);
    const response = await userServices.login(user);
    res.send(response);
  } catch (err) {
    next(err);
  }
};

exports.validateUser = async (req, res, next) => {
  try {
    const headers = qs.parse(req.headers);
    if (headers.authorization === undefined) {
      throw new UserAuth();
    } else {
      const response = await userServices.validateUser(headers.authorization.split(' ')[1]);
      res.send(response);
    }
  } catch (err) {
    next(err);
  }
};
