const mongoose = require('mongoose');

const article = new mongoose.Schema({
  title: {
    type: Object,
    required: true,
  },
  text: {
    type: Object,
    required: true,
  },
  imageCover: {
    type: Object,
  },
  images: {
    type: [{
      _id: false,
      link: {
        type: String,
      },
      alt: {
        type: String,
      },
    }],
  },
  date: {
    type: Date,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Article', article);
