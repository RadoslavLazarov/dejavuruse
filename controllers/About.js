const express = require('express');
const { getMainCategories, getPageMeta } = require('../models/db');

const router = express.Router();

router.get('/', async (req, res) => {
  const pageMeta = await getPageMeta('about');
  const mainCategories = await getMainCategories();

  res.render('about', {
    pageMeta,
    mainCategories,
  });
});

module.exports = router;
