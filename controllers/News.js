const express = require('express');
const { setLocale } = require('../models/setLocale');
const {
  getPageMeta,
  getNavCategories,
  getNewsArticles,
} = require('../models/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const langCookie = req.cookies.lang;
    const getLocale = setLocale(langCookie);
    const pageMeta = await getPageMeta(getLocale, 'news');
    const navCategories = await getNavCategories();
    const newsArticles = await getNewsArticles();

    res.render('news', {
      getLocale,
      pageMeta,
      navCategories,
      newsArticles,
    });
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
