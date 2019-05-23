const express = require('express');
const Decoration = require('../models/decorationCategories');
const DecorationAlbums = require('../models/decorationAlbums');
const { locale } = require('../scripts/getLocale');

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
  // const decorationAlbums = new DecorationAlbums({
  //   isVisible: true,
  //   name: {
  //     bg: 'Рига',
  //     en: 'Riga',
  //   },
  //   id: 'riga',
  //   decoration_category: '5ce3bbea1c9d440000900d38',
  // });

  // const result = await decorationAlbums.save();
  // console.log(result);

  // const decorationAlbums = await DecorationAlbums
  //   .find()
  //   // .select('decoration_category')
  //   .populate('decoration_category');
  // console.log(test);

  let decoration;
  let decorationAlbums;
  const currentCategory = req.params.category;
  const categories = [];

  try {
    decoration = await Decoration.find();
    decorationAlbums = await DecorationAlbums.find().populate('decoration_category');
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  for (const item of decoration) {
    categories.push(item.id);
  }

  if (categories.indexOf(currentCategory) === -1) {
    return res.sendStatus(404);
  }

  res.render('decorationCategory', {
    decoration,
    decorationAlbums,
    currentCategory,
  });
});

module.exports = router;

router.get('/:category/:album', async (req, res) => {
  let decoration;
  let decorationAlbums;
  const currentCategory = req.params.category;
  const categories = [];

  try {
    decoration = await Decoration.find();
    decorationAlbums = await DecorationAlbums.find().populate('decoration_category');
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  for (const item of decoration) {
    categories.push(item.id);
  }

  if (categories.indexOf(currentCategory) === -1) {
    return res.sendStatus(404);
  }

  res.render('decorationAlbum', {
    decoration,
    decorationAlbums,
    currentCategory,
  });
});

module.exports = router;
