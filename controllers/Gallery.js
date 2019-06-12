const express = require('express');
const GalleryCategoriesModel = require('../models/gallery_categories');
const GalleryAlbumsModel = require('../models/gallery_albums');
const { locale } = require('../scripts/getLocale');

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
  // const Albums = new GalleryAlbums({
  //   isVisible: true,
  //   name: {
  //     bg: 'Рига',
  //     en: 'Riga',
  //   },
  //   id: 'riga',
  //   imageCover: '/static/gallery/weddings/riga/18817628_1480777451985910_1737881282_o.jpg',
  //   images: [
  //     '/static/gallery/weddings/riga/18817570_1480777681985887_483645984_o.jpg',
  //     '/static/gallery/weddings/riga/18817604_1480777235319265_1715550736_o.jpg',
  //     '/static/gallery/weddings/riga/18817628_1480777451985910_1737881282_o.jpg',
  //     '/static/gallery/weddings/riga/18817917_1480777148652607_420202678_o.jpg',
  //     '/static/gallery/weddings/riga/18818036_1480777735319215_874913820_o.jpg',
  //     '/static/gallery/weddings/riga/18838405_1480777935319195_850309176_o.jpg',
  //     '/static/gallery/weddings/riga/18869676_1480777795319209_1434677916_o.jpg',
  //   ],
  //   gallery_category: '5cf636631c9d4400008e7d90',
  // });

  // const result = await Albums.save();
  // console.log(result);

  // const Album = await GalleryAlbums
  //   .find()
  //   .populate('gallery_category', 'id')
  //   .select('id gallery_category');
  // console.log(Album);
  // for (const item of Album) {
  //   console.log(item.gallery_category.id);
  // }

  const currentCategory = req.params.category;
  const galleryCategories = new GalleryCategoriesModel(res, currentCategory);
  const galleryAlbums = new GalleryAlbumsModel(null, currentCategory);
  let getGalleryCategories;
  let getGalleryAlbums;

  try {
    getGalleryCategories = await galleryCategories.findCategories;
    getGalleryAlbums = await galleryAlbums.findAlbums;
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
  // let getGalleryAlbums;
  let album;
  const currentCategory = req.params.category;
  const currentAlbum = req.params.album;
  // const galleryCategories = new GalleryCategoriesModel(res, currentCategory);
  const galleryAlbums = new GalleryAlbumsModel(res, null, currentAlbum);

  try {
    // getGalleryAlbums = await galleryAlbums.findAlbums;
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
