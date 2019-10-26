const mongoose = require('mongoose');

const category = new mongoose.Schema({
  showOnHeader: {
    type: Boolean,
  },
  showOnFooter: {
    type: Boolean,
  },
  priority: {
    type: Number,
  },
  navPosition: {
    type: String,
  },
  name: {
    type: Object,
  },
  id: {
    type: String,
  },
  url: {
    type: String,
  },
  meta: {
    type: Object,
  },
  imageCover: {
    type: String,
  },
  content: {
    type: Object,
  },
});

const categoriesSchema = new mongoose.Schema({
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

const albumSchema = new mongoose.Schema({
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

const credentials = new mongoose.Schema({
  id: {
    type: String,
  },
  credentials: {
    type: Object,
  },
});

const categoriesModel = mongoose.model('Category', category);
const galleryCategoriesModel = mongoose.model('Gallery_categories', categoriesSchema);
const albumModel = mongoose.model('Gallery_albums', albumSchema);
const credentialsModel = mongoose.model('Credentials', credentials);

module.exports = {
  categoriesModel,
  galleryCategoriesModel,
  albumModel,
  credentialsModel,
};
