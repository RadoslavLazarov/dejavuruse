module.exports = (req) => {
  const url = {};

  if (req.path === '/') {
    url.path = 'home';
    url.controller = url.path;
    url.currentPage = url.path;
    url.subPage = false;
  } else {
    url.path = req.path.split('/');
    url.controller = url.path[1];
    url.currentPage = url.path.slice(-1)[0];
    url.subPage = url.path[2];

    if (url.controller === 'lang') {
      url.controller = false;
      url.currentPage = false;
      url.subPage = false;
    }
  }

  return url;
};
