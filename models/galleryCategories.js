const mongoose = require('mongoose');

const galleryCategories = new mongoose.Schema({
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
});

const getGalleryCategories = mongoose.model('Gallery_categories', galleryCategories);

async function findCategories() {
  const categories = await getGalleryCategories.find();
  return categories;
}

async function validateCategories(res, currentCategory) {
  const getCategories = await findCategories();
  const categories = [];

  for (const category of getCategories) {
    categories.push(category.id);
  }

  if (categories.indexOf(currentCategory) === -1) {
    return res.sendStatus(404);
  }

  return true;
}

function GalleryCategoriesModel(res, currentCategory) {
  this.findCategories = findCategories();
  if (res && currentCategory) {
    this.validateCategories = validateCategories(res, currentCategory);
  }
}

module.exports = GalleryCategoriesModel;
