const GalleryCategories = require('../../models/gallery_categories');
const GalleryAlbums = require('../../models/gallery_albums');

/**
 * According to the URL, the gallery resources are obtained
 * @param {Object} url - current URL
 * @returns {Object} an object that contains rosources for gallery pages
 */
async function galleryResources(url) {
  let resources;

  if (url.currentPage === url.subPage) {
    const model = new GalleryCategories().Model;
    const getResources = await model.findOne({ id: url.currentPage });
    resources = getResources;
  } else if (url.currentPage !== url.controller && url.currentPage !== url.subPage) {
    const model = new GalleryAlbums().Model;
    const getResources = await model.findOne({ id: url.currentPage });
    resources = getResources;
  }

  return resources;
}

module.exports = { galleryResources };
