const express = require('express');
const axios = require('axios');

const CredentialsModel = require('../models/credentials');

const router = express.Router();

router.get('/', async (req, res) => {
  const uploads = [];
  let nextPageToken = '';

  try {
    const youtubeCredentials = await new CredentialsModel('youtube').findCredentials;
    const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=4&playlistId=UU1KPy3cAAj0i0RIFC_SzjMg&key=${youtubeCredentials.credentials.key}`;
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
  const youtubeCredentials = await new CredentialsModel('youtube').findCredentials;
  // const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=2&playlistId=UU1KPy3cAAj0i0RIFC_SzjMg&key=AIzaSyCNrSHcBS-gXiYiZ8vx1af6xJpB5kP9Ias`;
  const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&pageToken=${req.query.nextPageToken}&maxResults=4&playlistId=UU1KPy3cAAj0i0RIFC_SzjMg&key=${youtubeCredentials.credentials.key}`;
  // UU1KPy3cAAj0i0RIFC_SzjMg - VitalyZdTv; UUeaJzNsXhbxDKadHyzBTDUg - Dejavu
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
