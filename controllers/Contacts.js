const express = require('express');
const nodemailer = require('nodemailer');
const request = require('request');

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('contacts', {
    // getGalleryCategories,
  });
});

router.post('/feedback', (req, res) => {
  const secretKey = '6LfhT6wUAAAAAGrCR-zJoslXC0jotiL6aZJ_jySB';
  const { token } = req.body;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  if (req.body === undefined || req.body === '' || req.body === null) {
    res.json({ responseError: 'Captcha error' });
  }

  request(verificationURL, (error, response, body) => {
    const responseBody = JSON.parse(body);

    if (responseBody.success !== undefined && (!responseBody.success || responseBody.action !== 'feedback')) {
      return res.json({ responseError: 'Failed captcha verification' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'alien.lazarov@gmail.com',
        pass: 'qrohbpxifboasaax',
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
        console.log(err);
        res.send(err);
      } else {
        console.log(`Email sent: ${info.response}`);
        // res.send('Email sent: ' + info.response);
        res.redirect('back');
      }
    });

    return res.json({ responseSuccess: 'Sucess' });
  });
});

module.exports = router;
