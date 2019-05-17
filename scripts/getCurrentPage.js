module.exports = (url) => {
  let page = url.split('/');

  if (page[1] === '') {
    page = 'home';
  } else {
    page = page[1];
  }

  return page;
};
