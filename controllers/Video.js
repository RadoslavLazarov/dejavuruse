const express = require('express');
const axios = require('axios');

const CredentialsModel = require('../models/credentials');

const router = express.Router();

router.get('/', async (req, res) => {
  const uploads = [];
  let nextPageToken = '';

  try {
    const youtubeCredentials = await new CredentialsModel('youtube').findCredentials;
    const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=4&playlistId=UUeaJzNsXhbxDKadHyzBTDUg&key=${youtubeCredentials.credentials.key}`;
    const { data } = await axios.get(youtubeApiUrl);
    if (data.nextPageToken) {
      nextPageToken = data.nextPageToken;
    }
    for (const item of data.items) {
      uploads.push(item.contentDetails.videoId);
    }
  } catch (error) {
    return res.status(404).render('404');
  }

  res.render('video', {
    uploads,
    nextPageToken,
  });
});

router.get('/next', async (req, res) => {
  const uploads = [];
  let nextPageToken = '';

  try {
    const youtubeCredentials = await new CredentialsModel('youtube').findCredentials;
    const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&pageToken=${req.query.nextPageToken}&maxResults=4&playlistId=UUeaJzNsXhbxDKadHyzBTDUg&key=${youtubeCredentials.credentials.key}`;
    const { data } = await axios.get(youtubeApiUrl);

    if (data.nextPageToken) {
      nextPageToken = await data.nextPageToken;
    }
    for (const item of data.items) {
      uploads.push(item.contentDetails.videoId);
    }
  } catch (error) {
    return res.sendStatus(500);
  }

  res.json({ uploads, nextPageToken });
});

module.exports = router;
