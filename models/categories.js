const mongoose = require('mongoose');

const category = new mongoose.Schema({
  isVisible: {
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
  subPages: {
    type: String,
  },
  content: {
    type: Object,
  },
});

module.exports = mongoose.model('Category', category);
