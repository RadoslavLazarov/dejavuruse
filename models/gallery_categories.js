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
    type: String,
  },
  priority: {
    type: Number,
  },
  summary: {
    type: Object,
  },
  meta: {
    type: Object,
  },
});

const getGalleryCategories = mongoose.model('Gallery_categories', galleryCategories);

async function findCategory(res, currentCategory) {
  const categories = await getGalleryCategories.findOne({ id: currentCategory });
  return categories;
}

async function findCategories() {
  const categories = await getGalleryCategories.find(
    { isVisible: true }, null, { sort: { priority: 1 } },
  );

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
  this.Model = getGalleryCategories;
  this.findCategories = findCategories();
  if (res && currentCategory) {
    this.validateCategories = validateCategories(res, currentCategory);
    this.findCategory = findCategory(res, currentCategory);
  }
}

module.exports = GalleryCategoriesModel;
