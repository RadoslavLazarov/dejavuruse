/* eslint-disable prefer-destructuring */

/**
 * Create URL object
 * @param {Object} req - express request object
 * @returns {Object} URL object
 */
function getCurrentUtl(req) {
  const url = {};

  if (req.path === '/') {
    url.path = 'home';
    url.controller = url.path;
    url.subPage = false;
    url.currentPage = url.path;
  } else {
    url.path = req.path.split('/');
    url.controller = url.path[1];
    if (url.path.length === 2) {
      url.subPage = false;
      url.currentPage = url.controller;
    } else if (url.path.length > 2) {
      url.subPage = url.path[2];
      url.currentPage = url.path.slice(-1)[0];
    }
  }

  return url;
}

module.exports = getCurrentUtl;
