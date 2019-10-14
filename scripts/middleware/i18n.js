const path = require('path');
const i18n = require('i18n');

const locales = ['bg', 'en'];

i18n.configure({
  locales,
  defaultLocale: 'bg',
  directory: path.join(__dirname, '../../locales'),
  objectNotation: true,
});

function setLocale(req, res, next) {
  const url = req.path.split('/', 2);
  const cookie = req.cookies.lang;

  locales.forEach((locale) => {
    if (url[1] === locale) {
      i18n.setLocale(req, locale);
    } else if (cookie) {
      i18n.setLocale(req, cookie);
    } else {
      i18n.setLocale(req, 'bg');
    }
  });
  next();
}

module.exports = {
  locales,
  init: i18n.init,
  setLocale,
};
