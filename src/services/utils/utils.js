const nodeMailer = require('nodemailer');
const { emailPassword, email } = require('../../config/config');

const acceptPartnerTemplate = {
  subject: 'Tu has sido aceptado',
  html: '<b>Tu has sido aceptado a la cooperativa</b>',
};

const denyPartnerTemplate = {
  subject: 'Tu has sido rechazado',
  html: '<b>Tu has sido rechazado a la cooperativa</b>',
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
