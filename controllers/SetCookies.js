const express = require('express');

const router = express.Router();

router.get('/cookies-consent', (req, res) => {
  res.cookie('cookies_consent', 'yes', { maxAge: 12 * 30 * 24 * 60 * 60 * 1000 }); // maxAge 1 year
  res.json({ success: true });
});

router.get('/popup-banner', (req, res) => {
  res.cookie('banner_closed', 'yes', { maxAge: 24 * 60 * 60 * 1000 }); // maxAge 1 day
  res.json({ success: true });
});

module.exports = router;
