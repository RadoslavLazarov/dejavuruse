const mongoose = require('mongoose');
const fs = require('fs');
const sizeOf = require('image-size');
const { thumb } = require('node-thumbnail');

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
  gallery_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gallery_categories',
  },
  meta: {
    type: Object,
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
    imageCover: '/static/images/gallery/weddings/teodora-palace/fullsize/60351639_10156116060266781_4042868392355430400_n.jpg',
    summary: {
      bg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      en: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    date: new Date(),
    images: [],
    gallery_category: categoriesObjectId.weddings,
    meta: {
      bg: {
        title: 'Теодора Палас',
        description: 'описание теодора палас',
        keywords: 'ключови думи теодора палас',
      },
      en: {
        title: 'Teodora Palace',
        description: 'description teodora palace',
        keywords: 'teodora palace keywords',
      },
    },
  });

  const resizeThumbnails = () => new Promise((resolve, reject) => {
    let counter = 0;
    fs.readdirSync('./static/images/gallery/weddings/teodora-palace/original/').forEach((file, index, array) => {
      thumb({
        source: `./static/images/gallery/weddings/teodora-palace/original/${file}`, // could be a filename: dest/path/image.jpg
        destination: './static/images/gallery/weddings/teodora-palace/thumbnails/',
        width: 600,
        suffix: '',
        quiet: true,
      }).then(() => {
        console.log('Success thumbnail');
        counter += 1;
        if (counter === array.length) {
          resolve();
        }
      }).catch((e) => {
        console.log('Error', e.toString());
        reject(e);
      });
    });
  });

  const resizeFullsize = () => new Promise((resolve, reject) => {
    let counter = 0;
    fs.readdirSync('./static/images/gallery/weddings/teodora-palace/original/').forEach((file, index, array) => {
      thumb({
        source: `./static/images/gallery/weddings/teodora-palace/original/${file}`, // could be a filename: dest/path/image.jpg
        destination: './static/images/gallery/weddings/teodora-palace/fullsize/',
        width: 1920,
        suffix: '',
        quiet: true,
      }).then(() => {
        console.log('Success fullsize');
        counter += 1;
        if (counter === array.length) {
          resolve();
        }
      }).catch((e) => {
        console.log('Error', e.toString());
        reject(e);
      });
    });
  });

  // Waiting for resizing functions, then adding images dimensions in getGalleryAlbums model, then saving in DB
  resizeThumbnails().then(() => {
    resizeFullsize().then(() => {
      fs.readdirSync('./static/images/gallery/weddings/teodora-palace/fullsize/').forEach((file) => {
        const getDimensions = sizeOf(`./static/images/gallery/weddings/teodora-palace/fullsize/${file}`);
        Albums.images.push({
          link: file,
          dimensions: {
            width: getDimensions.width,
            height: getDimensions.height,
          },
        });
      });
      console.log('Album saved to DB');
      Albums.save();
    }).catch((e) => {
      console.log('Error', e.toString());
    });
  }).catch((e) => {
    console.log('Error', e.toString());
  });
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

function GalleryAlbumsModel(res, currentCategory, currentAlbum, create) {
  this.Model = getGalleryAlbums;
  this.findAlbums = findAlbums(currentCategory);
  if (create) {
    this.createAlbum = createAlbum();
  }
  if (res && currentAlbum) {
    this.findAlbum = findAlbum(res, currentCategory, currentAlbum);
  }
}

module.exports = GalleryAlbumsModel;
