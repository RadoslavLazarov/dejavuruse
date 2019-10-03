const path = require('path');
const i18n = require('i18n');

const locales = ['bg', 'en'];

i18n.configure({
  locales,
  defaultLocale: 'bg',
  directory: path.join(__dirname, '../../locales'),
  objectNotation: true,
});

module.exports = {
  locales,
  init: i18n.init,
  checkUrlForLocale: (req, res, next) => {
    const pathh = req.path.split('/', 2);
    locales.forEach((locale) => {
      if (pathh[1] === locale) {
        i18n.setLocale(req, locale);
      }
    });
    next();
  },
};
