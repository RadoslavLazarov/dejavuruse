const express = require('express');
const GalleryCategoriesModel = require('../models/gallery_categories');
const GalleryAlbumsModel = require('../models/gallery_albums');

const router = express.Router();

router.get('/', async (req, res) => {
  const galleryCategories = new GalleryCategoriesModel();
  let getGalleryCategories;

  try {
    getGalleryCategories = await galleryCategories.findCategories;
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  res.render('gallery', {
    getGalleryCategories,
  });
});

router.get('/:category', async (req, res) => {
  const currentCategory = req.params.category;
  const galleryCategories = new GalleryCategoriesModel(res, currentCategory);
  const galleryAlbums = new GalleryAlbumsModel(null, currentCategory);
  let getGalleryCategories;
  let getGalleryAlbums;

  try {
    getGalleryCategories = await galleryCategories.findCategories;
    getGalleryAlbums = await galleryAlbums.findAlbums;
    // await galleryAlbums.createAlbum;
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  res.render('galleryCategory', {
    currentCategory,
    getGalleryCategories,
    getGalleryAlbums,
  });
});

router.get('/:category/:album', async (req, res) => {
  let album;
  const currentCategory = req.params.category;
  const currentAlbum = req.params.album;
  const galleryAlbums = new GalleryAlbumsModel(res, currentCategory, currentAlbum);

  try {
    album = await galleryAlbums.findAlbum;
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  res.render('galleryAlbum', {
    currentCategory,
    album,
  });
});

module.exports = router;
