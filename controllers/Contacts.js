const express = require('express');
// const GalleryCategoriesModel = require('../models/gallery_categories');
// const { locale } = require('../scripts/getLocale');

const router = express.Router();

router.get('/', async (req, res) => {
  // const galleryCategories = new GalleryCategoriesModel();
  // let getGalleryCategories;

  // try {
  //   getGalleryCategories = await galleryCategories.findCategories;
  // } catch (e) {
  //   console.log(e);
  //   res.sendStatus(500);
  // }
  res.render('contacts', {
    // getGalleryCategories,
  });
});

module.exports = router;
