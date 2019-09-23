const mongoose = require('mongoose');
const fs = require('fs');
const sizeOf = require('image-size');

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
    type: String,
  },
  summary: {
    type: Object,
  },
  date: {
    type: Date,
  },
  images: {
    type: Array,
  },
  meta: {
    type: Object,
  },
  gallery_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gallery_categories',
  },
});

const getGalleryAlbums = mongoose.model('Gallery_albums', galleryAlbums);

async function createAlbum() {
  const categoriesObjectId = {
    christenings: '5cf635f01c9d4400008e7d8e',
    graduates: '5cf636341c9d4400008e7d8f',
    birthdays: '5cf636631c9d4400008e7d90',
    weddings: '5cf636781c9d4400008e7d91',
    kidsParties: '5cfb8cb21c9d4400004c3763',
  };

  const Albums = new getGalleryAlbums({
    isVisible: true,
    name: {
      bg: 'Теодора Палас',
      en: 'Teodora Palace',
    },
    id: 'teodora-palace',
    imageCover: '/static/images/gallery/weddings/teodora-palace/60351639_10156116060266781_4042868392355430400_n.jpg',
    images: [],
    gallery_category: categoriesObjectId.weddings,
  });

  fs.readdirSync('./static/images/gallery/weddings/teodora-palace/').forEach((file) => {
    const getDimensions = sizeOf(`./static/images/gallery/weddings/teodora-palace/${file}`);
    Albums.images.push({
      link: file,
      dimensions: {
        width: getDimensions.width,
        height: getDimensions.height,
      },
    });
  });

  Albums.save();
}

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

async function findAlbum(res, currentCategory, currentAlbum) {
  const album = await getGalleryAlbums.findOne({ id: currentAlbum });

  if (album === null) {
    return res.sendStatus(404);
  }

  return album;
}

function GalleryAlbumsModel(res, currentCategory, currentAlbum) {
  this.Model = getGalleryAlbums;
  this.findAlbums = findAlbums(currentCategory);
  // this.createAlbum = createAlbum();
  if (res && currentAlbum) {
    this.findAlbum = findAlbum(res, currentCategory, currentAlbum);
  }
}

module.exports = GalleryAlbumsModel;
