const mongoose = require('mongoose');

const decorationCategories = new mongoose.Schema({
  isVisible: {
    type: Boolean,
  },
  name: {
    type: Object,
  },
  id: {
    type: String,
  },
});

module.exports = mongoose.model('Decoration_categories', decorationCategories);
