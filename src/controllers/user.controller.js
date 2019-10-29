const qs = require('qs');
const { userService } = require('../services');

const { UserAuth } = require('../errors');

exports.createPartner = async (req, res, next) => {
  try {
    const newUser = qs.parse(req.body);
    const user = await userService.partnerCreator.createPartner(newUser);
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
};

exports.getPartners = async (req, res, next) => {
  try {
    const partners = await userService.partnerReader.getPartners(req.query);
    res.send(partners);
  } catch (err) {
    next(err);
  }
};

exports.acceptPartner = async (req, res, next) => {
  try {
    const partnersAccepted = await userService.partnerUpdater.acceptPartner(req.params.userId);
    res.send(partnersAccepted);
  } catch (err) {
    next(err);
  }
};

exports.denyPartner = async (req, res, next) => {
  try {
    await userService.partnerDeleter.denyPartner(req.params.userId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = qs.parse(req.body);
    const response = await userService.auth.login(user);
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
      const response = await userService.auth.validateUser(headers.authorization.split(' ')[1]);
      res.send(response);
    }
  } catch (err) {
    next(err);
  }
};
