const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {

  res.render('test', {

  });
});

module.exports = router;
