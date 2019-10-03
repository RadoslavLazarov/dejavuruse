const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.cookie('lang', req.query.lang, { maxAge: 12 * 30 * 24 * 60 * 60 * 1000, httpOnly: true }); // maxAge 1 year
  res.redirect(`/${req.query.lang}/${req.query.path}`);
});

module.exports = router;
