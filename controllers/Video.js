const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=2&playlistId=UU1KPy3cAAj0i0RIFC_SzjMg&key=AIzaSyCNrSHcBS-gXiYiZ8vx1af6xJpB5kP9Ias';
  const uploads = [];
  let nextPageToken = '';

  try {
    const { data } = await axios.get(youtubeApiUrl);
    if (data.nextPageToken) {
      nextPageToken = data.nextPageToken;
    }
    for (const item of data.items) {
      uploads.push(item.contentDetails.videoId);
    }
  } catch (error) {
    res.sendStatus(404);
  }
  // console.log(await nextPageToken);
  // console.log(await uploads);
  res.render('video', {
    uploads,
    nextPageToken,
  });
});

router.get('/next', async (req, res) => {
  // const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=2&playlistId=UU1KPy3cAAj0i0RIFC_SzjMg&key=AIzaSyCNrSHcBS-gXiYiZ8vx1af6xJpB5kP9Ias`;
  const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&pageToken=${req.query.nextPageToken}&maxResults=2&playlistId=UU1KPy3cAAj0i0RIFC_SzjMg&key=AIzaSyCNrSHcBS-gXiYiZ8vx1af6xJpB5kP9Ias`;
  const uploads = [];
  let nextPageToken = '';

  try {
    console.log(req.query);
    const { data } = await axios.get(youtubeApiUrl);
    if (data.nextPageToken) {
      nextPageToken = await data.nextPageToken;
    }
    for (const item of data.items) {
      uploads.push(item.contentDetails.videoId);
    }
  } catch (error) {
    res.sendStatus(500);
  }

  res.json({ uploads, nextPageToken });
});

module.exports = router;
