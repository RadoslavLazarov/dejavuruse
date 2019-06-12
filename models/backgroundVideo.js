const mongoose = require('mongoose');

const model = new mongoose.Schema({
  source: {
    type: Array,
  },
  poster: {
    type: String,
  },
  summary: {
    type: Object,
  },
  isVisible: {
    type: Boolean,
  },
});

const backgroundVideos = mongoose.model('Background_videos', model);

async function findBackgroundVideo() {
  const video = await backgroundVideos.findOne({ isVisible: true });
  return video;
}

function BackgroundVideoModel() {
  this.findBackgroundVideo = findBackgroundVideo();
}

module.exports = BackgroundVideoModel;
