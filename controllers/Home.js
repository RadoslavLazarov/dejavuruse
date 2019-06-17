const express = require('express');
const BackgroundVideoModel = require('../models/backgroundVideo');

const router = express.Router();

router.get('/', async (req, res) => {
  const backgroundVideo = new BackgroundVideoModel();
  let getBackgroundVideo;

  try {
    getBackgroundVideo = await backgroundVideo.findBackgroundVideo;
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  res.render('home', {
    getBackgroundVideo,
  });
});

module.exports = router;
