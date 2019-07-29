/* eslint-disable */
var fs = require('fs');
var readline = require('readline');
var { google } = require('googleapis');
var OAuth2 = google.auth.OAuth2;

const CredentialsModel = require('../models/credentials');
// If modifying these scopes, delete your previously saved credentials
var SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
const uploads = [];
let nextPageToken = '';
// Load client secrets from DB.
async function execute() {
  try {
    const credentials = await new CredentialsModel('youtubeDataApi').findCredentials;
    // Authorize a client with the loaded credentials, then call the YouTube API.
    await authorize(credentials.clientSecret, retrieveMyUploads);
    // console.log(`nextPageToken: ${nextPageToken}`);
  } catch (e) {
    console.log(`Error loading client secret file: ${e}`);
  }
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
async function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  try {
    const findCredentials = await new CredentialsModel('youtubeDataApi').findCredentials;
    oauth2Client.credentials = await findCredentials.credentials;
    await callback(oauth2Client);
  } catch (e) {
    console.log(e);
    getNewToken(oauth2Client, callback);
  }
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function (code) {
    rl.close();
    oauth2Client.getToken(code, function (err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
async function storeToken(token) {
  try {
    const getCredentals = await new CredentialsModel('youtubeDataApi').findCredentials;
    await getCredentals.credentials;
  } catch (e) {
    throw e;
  }

  try {
    await new CredentialsModel('youtubeDataApi', token).createCredentials;
  } catch (e) {
    throw e;
  }
}

/**
 * Lists the uploads of up to 5 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
async function retrieveMyUploads(auth) {
  const service = google.youtube('v3');
  const channels = await service.channels.list({
    auth,
    part: 'snippet,contentDetails,statistics',
    forUsername: 'VitalyzdTv',
    // mine: true,
  });
  // let nextPageToken = '';
  let channel = channels.data.items[0];
  const playlistId = channel.contentDetails.relatedPlaylists.uploads;
  // while (nextPageToken != null) {
  const playlistResponse = await service.playlistItems.list({
    auth,
    part: 'snippet',
    playlistId,
    // maxResults: 2,
    pageToken: nextPageToken,
  });

  for (let i = 0; i < playlistResponse.data.items.length; i++) {
    const playlistItem = playlistResponse.data.items[i];
    // console.log(playlistItem.snippet.title);
    // uploads.push(playlistItem.snippet.resourceId.videoId);
    uploads.push(playlistItem.snippet.title);
  }
  nextPageToken = playlistResponse.data.nextPageToken;
  // }
}

module.exports = {
  execute,
  uploads,
  // nextPageToken,
};
