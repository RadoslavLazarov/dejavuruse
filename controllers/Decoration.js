const express = require('express');
const Decoration = require('../models/decorationCategories');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const decoration = await Decoration.find();

    res.render('decoration', {
      decoration,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/:category', async (req, res) => {
  try {
    const decoration = await Decoration.find();
    const categories = [];

    for (const category of decoration) {
      categories.push(category.name.en.toLowerCase());
    }

    if (categories.indexOf(req.params.category) !== -1) {
      res.render('decorationCategory', {
        decoration,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
