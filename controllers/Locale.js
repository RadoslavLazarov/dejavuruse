const express = require('express');

const router = express.Router();

router.get('/:lang', async (req, res) => {
  res.cookie('lang', req.params.lang, { maxAge: 12 * 30 * 24 * 60 * 60 * 1000, httpOnly: true }); // maxAge 1 year
  res.redirect('back');
});

module.exports = router;
