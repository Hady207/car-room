const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

// const auth = {
//   auth: {
//     api_key: "424f72f97c54b5faddf80b67eee474f1-7fba8a4e-123edc15",
//     domain: "sandbox079af4303cc84386877a34c261de56d9.mailgun.org",
//   },
// };

// let transporter = nodemailer.createTransport({
//   server: "	smtp.sendgrid.net",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "apikey", // generated ethereal user
//     pass:
//       "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",
//   },
// });

// const sendgrid = nodemailer.createTransport(transporter);

// const mailOptions = {
//   from: "hadimaher@gmail.com",
//   to: "hady207@hotmail.com",
//   subject: "Testing",
//   text: "I would like to get in touch with you",
// };

// sendgrid.sendMail(mailOptions, function (error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("email sent");
//   }
// });

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.TEST_KEY);
// const msg = {
//   to: "hadiMaher207@gmail.com",
//   from: "hadiMaher207@gmail.com",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail.send(msg);

const sendEmail = async (options) => {
  // 1) Create a transporter
  let transporter;
  if (process.env.NODE_ENV === "production") {
    transporter = nodemailer.createTransport({
      host: process.env.SENDGRID_HOST,
      port: process.env.SENDGRID_PORT,
      auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  } else {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // 2) Define the email options
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: options.subject,
    text: options.message,
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
