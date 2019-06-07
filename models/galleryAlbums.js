const mongoose = require('mongoose');

const galleryAlbums = new mongoose.Schema({
  isVisible: {
    type: Boolean,
  },
  name: {
    type: Object,
  },
  id: {
    type: String,
  },
  imageCover: {
    type: Object,
  },
  images: {
    type: Array,
  },
  gallery_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gallery_categories',
  },
});

const getGalleryAlbums = mongoose.model('Gallery_albums', galleryAlbums);

async function findAlbums(currentCategory) {
  const allAlbums = await getGalleryAlbums.find().populate('gallery_category', 'id -_id');
  const albums = [];

  for (const album of allAlbums) {
    if (album.gallery_category.id === currentCategory) {
      albums.push(album);
    }
  }
  return albums;
}

async function findAlbum(res, currentAlbum) {
  const album = await getGalleryAlbums.findOne({ id: currentAlbum });
  if (album === null) {
    return res.sendStatus(404);
  }
  return album;
}

function GalleryAlbumsModel(res, currentCategory, currentAlbum) {
  this.findAlbums = findAlbums(currentCategory);
  if (res && currentAlbum) {
    this.findAlbum = findAlbum(res, currentAlbum);
  }
}

module.exports = GalleryAlbumsModel;
