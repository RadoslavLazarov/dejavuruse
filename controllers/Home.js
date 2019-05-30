const express = require('express');
const BackgroundVideos = require('../models/backgroundVideos');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const backgroundVideos = await BackgroundVideos.find();
    res.set({
      'Content-Security-Policy': 'frame-ancestors https://www.facebook.com',
    });
    res.render('home', {
      backgroundVideos,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
