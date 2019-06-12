const getCurrentUrl = require('../getCurrentUrl');
const { locale } = require('../getLocale');
const PageResourcesModel = require('../pageResources');

module.exports = async (req, res, next) => {
  const url = getCurrentUrl(req);
  const getLocale = locale();
  const getPageResources = new PageResourcesModel(url);
  let pageResources;
  let navCategories;
  try {
    pageResources = await getPageResources.pageResources;
    navCategories = await getPageResources.navCategories;
  } catch (e) {
    console.log(e);
  }
  // console.log(pageResources);
  const pageMeta = pageResources.meta[getLocale];

  res.locals = {
    url,
    getLocale,
    pageResources,
    navCategories,
    pageMeta,
  };

  next();
};
