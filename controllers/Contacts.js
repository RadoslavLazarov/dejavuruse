const express = require('express');
const nodemailer = require('nodemailer');
const request = require('request');

const CredentialsModel = require('../models/credentials');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log(req.cookies.cookies_consent);
  res.render('contacts', {
    // getGalleryCategories,
  });
});

router.post('/feedback', async (req, res) => {
  const recaptchaCredentials = await new CredentialsModel('recaptcha').findCredentials;
  const { token } = req.body;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaCredentials.credentials.secretKey}&response=${token}&remoteip=${req.connection.remoteAddress}`;

  if (token === undefined || token === '' || token === null) {
    return res.json({ captcha: { error: 'Captcha error' } });
  }

  const regex = {
    email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g,
    phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
    name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
  };

  const formFields = {
    required: {
      email: req.body.email.match(regex.email),
      subject: req.body.subject,
      name: req.body.name.match(regex.name),
      text: req.body.text,
    },
    unrequired: {
      phone: req.body.phone,
    },
  };

  // Check for missing required fields and if they match regex
  for (const field in formFields.required) {
    if (!formFields.required[field]) {
      return res.sendStatus(400);
    }
  }

  // Check if unrequired fields match regex
  for (const field in formFields.unrequired) {
    if (formFields.unrequired[field] !== '' && !formFields.unrequired[field].match(regex[field])) {
      return res.sendStatus(400);
    }
  }

  const gmailCredentials = await new CredentialsModel('gmail').findCredentials;

  request.post(verificationURL, (error, response, body) => {
    if (error) {
      console.log(`recaptcha error: ${error}`);
      return res.sendStatus(500);
    }
    const responseBody = JSON.parse(body);

    if (responseBody.success !== undefined && (!responseBody.success)) {
      return res.json({ captcha: { error: 'Failed captcha verification' } });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'alien.lazarov@gmail.com',
        pass: gmailCredentials.credentials.password,
      },
    });

    /* Gmail always sets authenticated username as the From: email address.
      So if you authenticate as foo@example.com and set bar@example.com as the from: address,
      then Gmail reverts this and replaces the sender with the authenticated user.
      https://nodemailer.com/usage/using-gmail/ */
    const mailOptions = {
      from: `${req.body.name} <${req.body.email}>`,
      to: 'alien.lazarov@gmail.com',
      subject: `${req.body.subject}`,
      html: `${`<b>От:</b> ${req.body.email}<br>`}
               ${`<b>Име:</b> ${req.body.name}<br>`}
               ${req.body.phone ? `<b>Телефон:</b> ${req.body.phone}<br>` : ''}
               ${req.body.event ? `<b>Събитие:</b> ${req.body.event}<br>` : ''}
               ${req.body.date ? `<b>Предпочитана дата:</b> ${req.body.date}<br>` : ''}
               ${`<b>Съобщение:</b> ${req.body.text}<br>`}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.json({ captcha: { success: true }, email: { error: 'Failed send message' } });
      } else {
        res.json({ captcha: { success: true }, email: { success: true } });
      }
    });
  });
});

module.exports = router;
