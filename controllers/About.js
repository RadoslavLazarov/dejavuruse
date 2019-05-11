const express = require('express');
const { setLocale } = require('../models/setLocale');
const {
  getPageMeta,
  getNavCategories,
} = require('../models/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const langCookie = req.cookies.lang;
    const getLocale = setLocale(langCookie);
    const pageMeta = await getPageMeta(getLocale, 'about');
    const navCategories = await getNavCategories();

    res.render('about', {
      getLocale,
      pageMeta,
      navCategories,
    });
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
