const { getCurrentLocale } = require('../getLocale');

module.exports = (req, res, next) => {
  const langCookie = req.cookies.lang;
  let locale;

  if (langCookie) {
    locale = langCookie;
  } else {
    locale = 'bg';
  }

  getCurrentLocale(locale);
  next();
};
