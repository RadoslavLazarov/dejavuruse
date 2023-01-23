const fs = require('fs');
const fsExtra = require('fs-extra');
const sizeOf = require('image-size');
const { v4: uuidv4 } = require('uuid');
const Jimp = require('jimp');
const jo = require('jpeg-autorotate');
const sharp = require('sharp');

const { fork } = require('child_process');

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
      { isVisible: true },
      null,
      { sort: { priority: 1 } }
    );
    return categories;
  }

  async findAlbums() {
    const currentCategory = this.req.params.category;
    const { res } = this;
    const allAlbums = await this.albumModel
      .find(null, null, { sort: { date: -1 } })
      .populate('gallery_category', null, { id: currentCategory });

    const albums = allAlbums.filter((item) => {
      if (item.gallery_category !== null) {
        return item;
      }
      return null;
    });

    if (!albums.length) {
      return res.status(404).render('404');
    }

    return albums;
  }

  async findAlbumFirstImages() {
    const { res } = this;
    const currentAlbum = this.req.params.album;
    const album = await this.albumModel
      .findOne({ id: currentAlbum }, { images: { $slice: 12 } })
      .populate('gallery_category');
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
      { id: currentAlbum },
      { images: { $slice: [skipImages, 12] } }
    );

    if (album === null) {
      return res.status(404).render('404');
    }

    return album;
  }

  // async createAlbum() {
  //   const { res } = this;
  //   const compute = fork('./imagesCompress.js');
  //   compute.send('start');

  //   compute.on('message', (result) => {
  //     // this.res.send(`Long computation result: ${result}`);
  //     console.log(`Long computation result: ${result}`);
  //   });
  // }

  async createAlbum() {
    const startTime = new Date();
    const categoriesObjectId = {
      christenings: '5cf635f01c9d4400008e7d8e',
      graduates: '5cf636341c9d4400008e7d8f',
      birthdays: '5cf636631c9d4400008e7d90',
      weddings: '5cf636781c9d4400008e7d91',
      kidsParties: '5cfb8cb21c9d4400004c3763',
    };
    const albumCategory = 'kids-parties';
    const albumId = 'frozen';
    const albumName = {
      bg: 'Frozen',
      en: 'Frozen',
    };
    const summary = {
      bg: `Честит рожден ден принцеске!
      Дъщерите са топли като слънцето, светли като звездите, хладни като бриза, и сладки като мед.
      Бъди все така весело и лъчезарно дете! Желаем ти много весели игри с добри приятели!`,
      en: `Честит рожден ден принцеске!
      Дъщерите са топли като слънцето, светли като звездите, хладни като бриза, и сладки като мед.
      Бъди все така весело и лъчезарно дете! Желаем ти много весели игри с добри приятели!`,
    };
    const albumImageCover = 'g.JPG';
    const albumDate = new Date(2020, 8, 12, 16, 0);

    const Albums = new this.albumModel({
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
      gallery_category: categoriesObjectId.kidsParties,
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
    const renameImages = () =>
      new Promise((resolve, reject) => {
        console.log('Start renaming images');
        let counter = 0;

        fs.readdir(
          `./static/images/gallery/${albumCategory}/${albumId}/original/`,
          (err, files) => {
            if (err) {
              reject(err);
            }

            files.forEach((file, index, array) => {
              const newName = `${uuidv4()}.${file.split('.').pop()}`;

              // rename imageCover
              if (file === Albums.imageCover) {
                Albums.imageCover = `/static/images/gallery/${albumCategory}/${albumId}/fullsize/${albumId}-${newName}`;
              }

              fs.rename(
                `./static/images/gallery/${albumCategory}/${albumId}/original/${file}`,
                `./static/images/gallery/${albumCategory}/${albumId}/original/${newName}`,
                (err) => {
                  if (err) {
                    reject(err);
                  }
                  console.log(`File ${file} rename success!`);
                  counter += 1;
                  if (counter === array.length) {
                    resolve();
                  }
                }
              );
            });
          }
        );
      });

    // Resize thumbnails
    const resizeThumbnails = () =>
      new Promise((resolve, reject) => {
        console.log('Start resizing thumbnails');
        let counter = 0;

        fs.readdir(
          `./static/images/gallery/${albumCategory}/${albumId}/original/`,
          (err, files) => {
            if (err) {
              reject(err);
            }

            files.forEach((file, index, array) => {
              let getDimensions = sizeOf(
                `./static/images/gallery/${albumCategory}/${albumId}/original/${file}`
              );

              let width = null;
              let height = null;

              if (getDimensions.height > getDimensions.width) {
                height = 600;
              } else {
                width = 600;
              }

              sharp(file)
                .resize(width, height)
                .toFile(
                  `./static/images/gallery/${albumCategory}/${albumId}/thumbnails/${albumId}-${file}`,
                  (err, info) => {
                    if (err) {
                      reject(err);
                    }

                    console.log(`Success thumbnail ${file}`);
                  }
                );

              // Jimp.read(
              //   `./static/images/gallery/${albumCategory}/${albumId}/original/${file}`
              // )
              //   .then((image) => {
              //     // console.log('JIMPPPP: ', image);
              //     counter += 1;
              //     let width = 600;
              //     let height = Jimp.AUTO;

              //     if (getDimensions.height > getDimensions.width) {
              //       width = Jimp.AUTO;
              //       height = 600;
              //     }

              //     image
              //       .resize(width, height)
              //       .rotate(getDimensions.height < getDimensions.width ? 90 : 0)
              //       .quality(60)
              //       .write(
              //         `./static/images/gallery/${albumCategory}/${albumId}/thumbnails/${albumId}-${file}`,
              //         () => {
              //           console.log(`Success thumbnail ${file}`);
              //         }
              //       );
              //   })
              //   .catch((e) => {
              //     reject(e);
              //   });
            });
          }
        );
      });

    const resizeFullsize = () =>
      new Promise((resolve, reject) => {
        console.log('Start resizing fullsize');
        let counter = 0;

        fs.readdir(
          `./static/images/gallery/${albumCategory}/${albumId}/original/`,
          (err, files) => {
            if (err) {
              reject(err);
            }

            files.forEach((file, index, array) => {
              let getDimensions;

              sizeOf(
                `./static/images/gallery/${albumCategory}/${albumId}/original/${file}`,
                (e, dimensions) => {
                  if (e) {
                    reject(e);
                  }
                  getDimensions = dimensions;
                }
              );

              Jimp.read(
                `./static/images/gallery/${albumCategory}/${albumId}/original/${file}`
              )
                .then((image) => {
                  let width = 2000;
                  let height = Jimp.AUTO;

                  if (getDimensions.height < getDimensions.width) {
                    width = Jimp.AUTO;
                    height = 2000;
                  }

                  image
                    .resize(width, height) // resize
                    .rotate(getDimensions.height < getDimensions.width ? 90 : 0) // fix portrait orientation
                    .quality(60) // set JPEG quality
                    .write(
                      `./static/images/gallery/${albumCategory}/${albumId}/fullsize/${albumId}-${file}`,
                      () => {
                        sizeOf(
                          `./static/images/gallery/${albumCategory}/${albumId}/fullsize/${albumId}-${file}`,
                          (e, dimensions) => {
                            if (e) {
                              reject(e);
                            }

                            const fullSizeDimensions = dimensions;

                            Albums.images.push({
                              link: `${albumId}-${file}`,
                              dimensions: {
                                width: fullSizeDimensions.width,
                                height: fullSizeDimensions.height,
                              },
                            });

                            console.log(`Success fullsize ${file}`);
                            counter += 1;

                            if (counter === array.length) {
                              resolve();
                            }
                          }
                        );
                      }
                    );
                })
                .catch((e) => {
                  reject(e);
                });
            });
          }
        );
      });

    /* Waiting for resizing functions, deleting original images folder,
      then adding images dimensions in getGalleryAlbums model and saving in DB */
    renameImages()
      .then(() => {
        resizeThumbnails()
          .then(() => {
            resizeFullsize()
              .then(() => {
                fsExtra.remove(
                  `./static/images/gallery/${albumCategory}/${albumId}/original`,
                  (err) => {
                    if (err) {
                      return console.error(err);
                    }
                    return console.log('Deleted original images folder!');
                  }
                );

                // fs.readdir(`./static/images/gallery/weddings/${albumId}/fullsize/`, (err, files) => {
                //   files.forEach((file) => {
                //     const getDimensions = sizeOf(`./static/images/gallery/weddings/${albumId}/fullsize/${file}`);
                //     Albums.images.push({
                //       link: file,
                //       dimensions: {
                //         width: getDimensions.width,
                //         height: getDimensions.height,
                //       },
                //     });
                //   });
                // });

                Albums.save((err) => {
                  if (err) {
                    console.error('Album failed to save to DB');
                  }
                  console.log('Album saved to DB');
                  const stopTime = new Date();
                  const startMinutes = startTime.getMinutes();
                  const startSeconds = startTime.getSeconds();
                  const stopMinutes = stopTime.getMinutes();
                  const stopSeconds = stopTime.getSeconds();
                  console.log(
                    `Task done for ${stopMinutes - startMinutes}m ${
                      stopSeconds - startSeconds
                    }s`
                  );
                });
              })
              .catch((e) => {
                console.error(e);
              });
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

module.exports = Gallery;
