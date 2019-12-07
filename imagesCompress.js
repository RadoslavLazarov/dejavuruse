const fs = require('fs');
const fsExtra = require('fs-extra');
const sizeOf = require('image-size');
const uuidv4 = require('uuid/v4');
const Jimp = require('jimp');
const { albumModel } = require('./models/dbModels');

const createAlbum = async (req, res, categoriesModel, albumModell) => {
  // const req = reqq;
  // const res = ress;
  // const categoriesModel = categoriesModell;
  // const albumModel = albumModel;

  const categoriesObjectId = {
    christenings: '5cf635f01c9d4400008e7d8e',
    graduates: '5cf636341c9d4400008e7d8f',
    birthdays: '5cf636631c9d4400008e7d90',
    weddings: '5cf636781c9d4400008e7d91',
    kidsParties: '5cfb8cb21c9d4400004c3763',
  };
  const albumId = 'kati';
  const albumName = {
    bg: 'Кати',
    en: 'Kati',
  };
  const summary = {
    bg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    en: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  };
  const albumImageCover = 'GGPhoto00556.jpg';
  const albumDate = new Date();

  const Albums = new albumModel({
    isVisible: true,
    name: {
      bg: albumName.bg,
      en: albumName.en,
    },
    id: albumId,
    imageCover: albumImageCover,
    summary: {
      bg: summary.bg,
      en: summary.en,
    },
    date: albumDate,
    images: [],
    gallery_category: categoriesObjectId.weddings,
    meta: {
      bg: {
        title: albumName.bg,
        description: summary.bg,
        keywords: '',
      },
      en: {
        title: albumName.en,
        description: summary.en,
        keywords: '',
      },
    },
  });

  // Rename original images
  const renameImages = () => new Promise((resolve, reject) => {
    console.log('Start renaming images');
    let counter = 0;
    fs.readdir(`./static/images/gallery/weddings/${albumId}/original/`, (err, files) => {
      if (err) {
        reject(err);
      }

      files.forEach((file, index, array) => {
        const newName = `${uuidv4()}.${file.split('.').pop()}`;

        // rename imageCover
        if (file === Albums.imageCover) {
          Albums.imageCover = `/static/images/gallery/weddings/${albumId}/fullsize/${albumId}-${newName}`;
        }

        fs.rename(`./static/images/gallery/weddings/${albumId}/original/${file}`, `./static/images/gallery/weddings/${albumId}/original/${newName}`, (err) => {
          if (err) {
            reject(err);
          }
          console.log(`File ${file} rename success!`);
          counter += 1;
          if (counter === array.length) {
            resolve();
          }
        });
      });
    });
  });

  // Resize thumbnails
  const resizeThumbnails = () => new Promise((resolve, reject) => {
    console.log('Start resizing thumbnails');
    let counter = 0;

    fs.readdir(`./static/images/gallery/weddings/${albumId}/original/`, (err, files) => {
      if (err) {
        reject(err);
      }

      files.forEach((file, index, array) => {
        const getDimensions = sizeOf(`./static/images/gallery/weddings/${albumId}/original/${file}`);

        Jimp.read(`./static/images/gallery/weddings/${albumId}/original/${file}`)
          .then((image) => {
            counter += 1;
            let width = 600;
            let height = Jimp.AUTO;

            if (getDimensions.height > getDimensions.width) {
              width = Jimp.AUTO;
              height = 600;
            }

            image
              .resize(width, height)
              .quality(60)
              .write(`./static/images/gallery/weddings/${albumId}/thumbnails/${albumId}-${file}`, () => {
                console.log(`Success thumbnail ${file}`);
                if (counter === array.length) {
                  resolve();
                }
              });
          }).catch((e) => {
            reject(e);
          });
      });
    });
  });


  // Resize fullsize images. Just copy if width is small
  const resizeFullsize = () => new Promise((resolve, reject) => {
    console.log('Start resizing fullsize');
    let counter = 0;
    fs.readdir(`./static/images/gallery/weddings/${albumId}/original/`, (err, files) => {
      if (err) {
        reject(err);
      }

      files.forEach((file, index, array) => {
        const getDimensions = sizeOf(`./static/images/gallery/weddings/${albumId}/original/${file}`);

        Jimp.read(`./static/images/gallery/weddings/${albumId}/original/${file}`)
          .then((image) => {
            counter += 1;
            let width = 2000;
            let height = Jimp.AUTO;

            if (getDimensions.height > getDimensions.width) {
              width = Jimp.AUTO;
              height = 2000;
            }

            image
              .resize(width, height) // resize
              .quality(60) // set JPEG quality
              .write(`./static/images/gallery/weddings/${albumId}/fullsize/${albumId}-${file}`, () => {
                const fullSizeDimensions = sizeOf(`./static/images/gallery/weddings/${albumId}/fullsize/${albumId}-${file}`);

                Albums.images.push({
                  link: `${albumId}-${file}`,
                  dimensions: {
                    width: fullSizeDimensions.width,
                    height: fullSizeDimensions.height,
                  },
                });
                console.log(`Success fullsize ${file}`);
                if (counter === array.length) {
                  resolve();
                }
              }); // save
          }).catch((e) => {
            reject(e);
          });
      });
    });
  });


  /* Waiting for resizing functions, deleting original images folder,
    then adding images dimensions in getGalleryAlbums model and saving in DB */
  renameImages().then(() => {
    resizeThumbnails().then(() => {
      resizeFullsize().then(async () => {
        // fsExtra.remove('./static/images/gallery/weddings/kati/original', (err) => {
        //   if (err) {
        //     return console.error(err);
        //   }
        //   return console.log('Deleted original images folder!');
        // });

        fs.readdir(`./static/images/gallery/weddings/${albumId}/fullsize/`, (err, files) => {
          files.forEach((file) => {
            console.log('getdimensions func');
            const getDimensions = sizeOf(`./static/images/gallery/weddings/${albumId}/fullsize/${file}`);
            Albums.images.push({
              link: file,
              dimensions: {
                width: getDimensions.width,
                height: getDimensions.height,
              },
            });
          });
          Albums.save((e) => {
            if (e) {
              console.error('Album failed to save to DB');
            }
            console.log('Album saved to DB');
          });
        });

        // return Albums.save((err) => {
        //   if (err) {
        //     console.error('Album failed to save to DB');
        //   }
        //   console.log('Album saved to DB');
        // });
        // return console.log('Task finished');
      }).catch((e) => {
        console.log('Error', e.toString());
      });
    }).catch((e) => {
      console.log('Error', e.toString());
    });
  }).catch((e) => {
    console.log('Error', e.toString());
  });
};

process.on('message', async () => {
  const result = await createAlbum();
  process.send(result);
});
