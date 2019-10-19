const nodeMailer = require('nodemailer');
const { emailPassword, email } = require('../../config/config');
const collections = require('./collectionsNames');

const acceptPartnerTemplate = {
  subject: 'You have been accepted',
  html: '<b>You have been accepted to the co-op</b>',
};

const denyPartnerTemplate = {
  subject: 'You have been rejected',
  html: '<b>You have been rejected to the co-op</b>',
};

exports.requestEmail = async (subject, html, toEmail) => {
  this.sendEmail({ subject, html, to: toEmail });
};

exports.requestPartner = async (toEmail, accept) => {
  if (accept) {
    return this.sendEmail({ ...acceptPartnerTemplate, to: toEmail });
  }
  return this.sendEmail({ ...denyPartnerTemplate, to: toEmail });
};

exports.sendEmail = async mailOptions => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: emailPassword,
    },
  });
  mailOptions.from = email;
  return transporter.sendMail(mailOptions);
};

exports.projectQuery = async (stringColection, params) => {
  let template;
  if (stringColection === collections.userCollection) {
    template = collections.templateUser;
  }
  params.forEach(param => {
    template[param] = true;
  });
  Object.keys(template).forEach(key => {
    if (!template[key]) {
      delete template[key];
    }
  });
  return template;
};
