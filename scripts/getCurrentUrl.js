/* eslint-disable prefer-destructuring */

/**
 * Create global URL object
 * @param {Object} req - express request object
 * @returns {Object} URL object
 */
function getCurrentUrl(req) {

  const url = {
    fullUrl: `https://${req.hostname}${req.originalUrl}`,
    protocol: 'https',
    host: req.hostname,
  };

  if (req.path.length < 5) {
    url.path = 'home';
    url.controller = url.path;
    url.subPage = false;
    url.currentPage = url.path;
  } else {
    url.path = req.path.split('/');
    url.controller = url.path[2];
    if (url.path.length === 3) {
      url.subPage = false;
      url.currentPage = url.controller;
    } else if (url.path.length > 3) {
      url.subPage = url.path[3];
      url.currentPage = url.path.slice(-1)[0];
    }
  }

  const path = req.path.split('/');
  url.shortPath = [];
  path.forEach((element, index) => {
    if (index > 1) {
      url.shortPath.push(element);
    }
  });
  url.shortPath = url.shortPath.join('/');
  // console.log(url);
  return url;
}

module.exports = getCurrentUrl;
