const Gallery = require('../../models/gallery');
const { galleryCategoriesModel, albumModel } = require('../../models/dbModels');

/**
 * According to the URL, the gallery resources are obtained
 * @param {Object} url - current URL
 * @returns {Object} an object that contains rosources for gallery pages
 */
async function galleryResources(url) {
  let resources;
  const gallery = new Gallery(null, null, galleryCategoriesModel, albumModel);

  if (url.currentPage === url.subPage) {
    const model = gallery.categoriesModel;
    const getResources = await model.findOne({ id: url.currentPage });
    resources = getResources;
  } else if (url.currentPage !== url.controller && url.currentPage !== url.subPage) {
    const model = gallery.albumModel;
    const getResources = await model.findOne({ id: url.currentPage });
    resources = getResources;
  }

  return resources;
}

module.exports = { galleryResources };
