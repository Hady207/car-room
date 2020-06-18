const express = require("express");

const sgMail = require("@sendgrid/mail");
const sendEmail = require("./mail");
const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/email", async (req, res) => {
  try {
    const msg = {
      subject: `job from ${req.body.email}`,
      message: req.body.message,
    };
    await sendEmail(msg);
    res.send("sent");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
