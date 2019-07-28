const express = require('express');

const youtubeApi = require('../scripts/youtube');

const router = express.Router();

router.get('/', async (req, res) => {
  // let uploads;

  // if (!youtubeApi.uploads.length) {
  //   await youtubeApi.execute();
  //   uploads = await youtubeApi.uploads;
  // } else {
  //   uploads = await youtubeApi.uploads;
  // }

  res.render('video', {
    // uploads,
    // nextPageToken,
  });
});

router.get('/uploads', async (req, res) => {
  await youtubeApi.execute();
  const uploads = await youtubeApi.uploads;

  res.json({ uploads });
});

module.exports = router;
