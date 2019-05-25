const mongoose = require('mongoose');

const backgroundVideos = new mongoose.Schema({
  source: {
    type: Array,
  },
  summary: {
    type: Object,
  },
});

module.exports = mongoose.model('Background_videos', backgroundVideos);
