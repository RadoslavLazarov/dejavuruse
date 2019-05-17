const getCurrentPage = require('../getCurrentPage');
const { locale } = require('../getLocale');
const {
  getPageMeta,
  getNavCategories,
} = require('../resources');

module.exports = async (req, res, next) => {
  const page = getCurrentPage(req.originalUrl);
  const getLocale = locale();
  const pageMeta = await getPageMeta(page);
  const navCategories = await getNavCategories();

  res.locals = {
    getLocale,
    pageMeta,
    navCategories,
  };

  next();
};
