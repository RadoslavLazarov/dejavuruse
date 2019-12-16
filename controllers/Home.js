const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log(req.ipInfo);
  res.render('home');
});

module.exports = router;
