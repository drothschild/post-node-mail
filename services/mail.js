const nodemailer = require("nodemailer");
const promisify = require("es6-promisify");

exports.send = async options => {
  const smtpConfig = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  };
  console.log(smtpConfig);
  const transport = nodemailer.createTransport(smtpConfig);

  const mailConfig = {
    from: process.env.MAIL_FROM,
    to: options.to,
    subject: options.subject,
    text: options.body
  };

  const sendMail = promisify(transport.sendMail, transport);
  return sendMail(mailConfig);
};
