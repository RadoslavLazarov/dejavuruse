const express = require('express');
const Article = require('../models/articles');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();

    res.render('news', {
      articles,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
