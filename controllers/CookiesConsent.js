const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.cookie('cookies_consent', 'yes', { maxAge: 12 * 30 * 24 * 60 * 60 * 1000 }); // maxAge 1 year
  res.json({ success: true });
});

module.exports = router;
