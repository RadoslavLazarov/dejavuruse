const fs = require('fs');
const fsExtra = require('fs-extra');
const sizeOf = require('image-size');
const { thumb } = require('node-thumbnail');

/* */
class Gallery {
  constructor(req, res, categoriesModel, albumModel) {
    this.req = req;
    this.res = res;
    this.categoriesModel = categoriesModel;
    this.albumModel = albumModel;
  }

  async findCategories() {
    const categories = await this.categoriesModel.find(
      { isVisible: true }, null, { sort: { priority: 1 } },
    );
    return categories;
  }

  async findAlbums() {
    const currentCategory = this.req.params.category;
    const allAlbums = await this.albumModel.find().populate('gallery_category');
    const albums = [];

    for (const album of allAlbums) {
      if (album.gallery_category.id === currentCategory) {
        albums.push(album);
      }
    }

    return albums;
  }

  async findAlbumFirstImages() {
    const { res } = this;
    const currentAlbum = this.req.params.album;
    const album = await this.albumModel.findOne({ id: currentAlbum }, { images: { $slice: 12 } }).populate('gallery_category');
    // console.log(album);
    /* CMS function for add photo alt text */

    // album.images.forEach((element, index) => {
    //   const test = element;
    //   if (index === 1) {
    //     test.alt = {
    //       bg: 'тестване',
    //       en: 'testing',
    //     };
    //   }
    // });
    // await getGalleryAlbums.findOneAndUpdate({ id: currentAlbum }, album, {
    //   new: true,
    // });
    // console.log(album);

    if (album === null) {
      return res.status(404).render('404');
    }

    return album;
  }

  async findAlbumNextImages() {
    const { res } = this;
    const skipImages = Number(this.req.query.items);
    const currentAlbum = this.req.params.album;
    const album = await this.albumModel.findOne(
      { id: currentAlbum }, { images: { $slice: [skipImages, 12] } },
    );

    if (album === null) {
      return res.status(404).render('404');
    }

    return album;
  }

  async createAlbum() {
    const { req } = this;
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
        bg: 'Исперих',
        en: 'Isperih',
      },
      id: 'isperih',
      imageCover: '/static/images/gallery/weddings/isperih/fullsize/20190824_150800_fullsize.jpg',
      summary: {
        bg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        en: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
      date: new Date(),
      images: [],
      gallery_category: categoriesObjectId.weddings,
      meta: {
        bg: {
          title: 'Исперих',
          description: 'описание Исперих',
          keywords: 'ключови думи Исперих',
        },
        en: {
          title: 'Isperih',
          description: 'description Isperih',
          keywords: 'Isperih keywords',
        },
      },
    });

    // Resize thumbnails
    const resizeThumbnails = () => new Promise((resolve, reject) => {
      let counter = 0;
      fs.readdirSync('./static/images/gallery/weddings/isperih/original/').forEach((file, index, array) => {
        thumb({
          source: `./static/images/gallery/weddings/isperih/original/${file}`, // could be a filename: dest/path/image.jpg
          destination: './static/images/gallery/weddings/isperih/thumbnails/',
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

    // Resize fullsize images. Just copy if width is small
    const resizeFullsize = () => new Promise((resolve, reject) => {
      let counter = 0;

      fs.readdirSync('./static/images/gallery/weddings/isperih/original/').forEach((file, index, array) => {
        const getDimensions = sizeOf(`./static/images/gallery/weddings/isperih/original/${file}`);

        if (getDimensions.width < 1920) {
          fsExtra.copy(`./static/images/gallery/weddings/isperih/original/${file}`, `./static/images/gallery/weddings/isperih/fullsize/${file}`, (err) => {
            if (err) {
              return console.error(err);
            }
            console.log('Coping file success');
            counter += 1;
            if (counter === array.length) {
              resolve();
            }
          });
        } else {
          thumb({
            source: `./static/images/gallery/weddings/isperih/original/${file}`, // could be a filename: dest/path/image.jpg
            destination: './static/images/gallery/weddings/isperih/fullsize/',
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
        }
      });
    });

    /* Waiting for resizing functions, deleting original images folder,
      then adding images dimensions in getGalleryAlbums model and saving in DB */
    resizeThumbnails().then(() => {
      resizeFullsize().then(() => {
        fsExtra.remove('./static/images/gallery/weddings/isperih/original', (err) => {
          if (err) {
            return console.error(err);
          }
          return console.log('Deleted original images folder!');
        });

        fs.readdirSync('./static/images/gallery/weddings/isperih/fullsize/').forEach((file) => {
          const getDimensions = sizeOf(`./static/images/gallery/weddings/isperih/fullsize/${file}`);
          Albums.images.push({
            link: file,
            dimensions: {
              width: getDimensions.width,
              height: getDimensions.height,
            },
          });
        });

        Albums.save();
        console.log('Album saved to DB');
      }).catch((e) => {
        console.log('Error', e.toString());
      });
    }).catch((e) => {
      console.log('Error', e.toString());
    });
  }
}

module.exports = Gallery;
