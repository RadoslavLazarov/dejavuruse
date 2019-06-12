const express = require('express');
const BackgroundVideoModel = require('../models/backgroundVideo');

const router = express.Router();

router.get('/', async (req, res) => {
  const backgroundVideo = new BackgroundVideoModel();
  let getBackgroundVideo;

  try {
    getBackgroundVideo = await backgroundVideo.findBackgroundVideo;

    res.render('home', {
      getBackgroundVideo,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
