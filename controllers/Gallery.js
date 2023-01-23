const express = require('express');
const Gallery = require('../models/gallery');
const { galleryCategoriesModel, albumModel } = require('../models/dbModels');

const router = express.Router();

router.get('/', async (req, res) => {
  const gallery = new Gallery(null, null, galleryCategoriesModel);
  let galleryCategories;

  try {
    galleryCategories = await gallery.findCategories();
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
  res.render('gallery', {
    galleryCategories,
  });
});

router.get('/:category', async (req, res) => {
  const gallery = new Gallery(req, res, galleryCategoriesModel, albumModel);
  const currentCategory = req.params.category;

  let galleryCategory;
  let galleryAlbums;

  // gallery.createAlbum();
  try {
    galleryAlbums = await gallery.findAlbums();
    galleryCategory = galleryAlbums[0].gallery_category;
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  res.render('galleryCategory', {
    currentCategory,
    galleryCategory,
    galleryAlbums,
  });
});

router.get('/:category/:album', async (req, res) => {
  let galleryCategory;
  let galleryAlbum;
  const currentCategory = req.params.category;
  const gallery = new Gallery(req, res, galleryCategoriesModel, albumModel);

  try {
    galleryAlbum = await gallery.findAlbumFirstImages();
    galleryCategory = galleryAlbum.gallery_category;
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  res.render('galleryAlbum', {
    currentCategory,
    galleryAlbum,
    galleryCategory,
  });
});

router.get('/:category/:album/next', async (req, res) => {
  const gallery = new Gallery(req, res, null, albumModel);
  let galleryAlbum;

  try {
    galleryAlbum = await gallery.findAlbumNextImages();
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  if (galleryAlbum.images.length) {
    res.json({ images: galleryAlbum.images });
  } else {
    res.sendStatus(204);
  }
});

module.exports = router;
