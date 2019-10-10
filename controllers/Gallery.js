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
  // const albumCreate = new GalleryAlbumsModel(null, null, null, 'create').createAlbum;
  let getGalleryCategory;
  let getGalleryCategories;
  let getGalleryAlbums;

  try {
    getGalleryCategory = await galleryCategories.findCategory;
    getGalleryCategories = await galleryCategories.findCategories;
    getGalleryAlbums = await galleryAlbums.findAlbums;
    // await galleryAlbums.createAlbum;
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  res.render('galleryCategory', {
    currentCategory,
    getGalleryCategory,
    getGalleryCategories,
    getGalleryAlbums,
  });
});

router.get('/:category/:album', async (req, res) => {
  let album;
  const firstImages = [];
  const currentCategory = req.params.category;
  const currentAlbum = req.params.album;
  const galleryCategories = new GalleryCategoriesModel(res, currentCategory);
  const galleryAlbums = new GalleryAlbumsModel(res, currentCategory, currentAlbum);
  let getGalleryCategory;

  try {
    album = await galleryAlbums.findAlbum;
    getGalleryCategory = await galleryCategories.findCategory;
    album.images.forEach((element, index) => {
      if (index < 12) {
        firstImages.push(element);
      }
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  // console.log(firstImages);
  // console.log(album.images.length);
  res.render('galleryAlbum', {
    currentCategory,
    album,
    firstImages,
    getGalleryCategory,
  });
});

router.get('/:category/:album/next', async (req, res) => {
  const currentCategory = req.params.category;
  const currentAlbum = req.params.album;
  const galleryAlbums = new GalleryAlbumsModel(res, currentCategory, currentAlbum);
  let album;
  let images = [];

  try {
    album = await galleryAlbums.findAlbum;
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }

  const items = Number(req.query.items);

  album.images.forEach((element, index) => {
    if (index >= items && index <= items + 11) {
      images.push(element);
    } else if (items > index) {
      images = [];
    }
  });

  if (images.length) {
    res.json({ images });
  } else {
    res.sendStatus(204);
  }
});

module.exports = router;
