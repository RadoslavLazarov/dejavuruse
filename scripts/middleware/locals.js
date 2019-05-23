const getCurrentPage = require('../getCurrentPage');
const { locale } = require('../getLocale');
const {
  getPageMeta,
  getNavCategories,
} = require('../resources');

module.exports = async (req, res, next) => {
  const url = getCurrentPage(req.originalUrl);
  const getLocale = locale();
  const pageMeta = await getPageMeta(url);
  const navCategories = await getNavCategories();

  res.locals = {
    url,
    getLocale,
    pageMeta,
    navCategories,
  };

  next();
};
