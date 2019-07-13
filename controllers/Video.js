const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('video');
});

module.exports = router;
