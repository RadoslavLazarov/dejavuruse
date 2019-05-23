const mongoose = require('mongoose');

const decorationAlbums = new mongoose.Schema({
  isVisible: {
    type: Boolean,
  },
  name: {
    type: Object,
  },
  id: {
    type: String,
  },
  decoration_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Decoration_categories',
  },
});

module.exports = mongoose.model('Decoration_albums', decorationAlbums);
