const nodeMailer = require('nodemailer');

const acceptPartnerTemplate = {
  subject: 'Tu has sido aceptado',
  html: '<b>Tu has sido aceptado a la cooperativa</b>',
};

const denyPartnerTemplate = {
  subject: 'Tu has sido rechazado',
  html: '<b>Tu has sido rechazado a la cooperativa</b>',
};

exports.requestPartner = async (email, accept) => {
  if (accept) {
    return this.sendEmail({ ...acceptPartnerTemplate, to: email });
  }
  return this.sendEmail({ ...denyPartnerTemplate, to: email });
};

exports.sendEmail = async mailOptions => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'cooperativa.phoenix20@gmail.com',
      pass: '!Ec%yAQ=HDRRVj3F',
    },
  });
  mailOptions.from = 'cooperativa.phoenix20@gmail.com';
  return transporter.sendMail(mailOptions);
};
