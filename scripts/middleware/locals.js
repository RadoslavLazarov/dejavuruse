const getCurrentUrl = require('../getCurrentUrl');
const { locale } = require('../getLocale');
const PageResourcesModel = require('../pageResources');

module.exports = async (req, res, next) => {
  const url = getCurrentUrl(req);
  const getLocale = locale();
  const getPageResources = new PageResourcesModel(url);
  let pageResources;
  let navCategories;
  let footerPages;
  // let footerItems;
  // let footerItemContent;
  // console.log(url);
  try {
    pageResources = await getPageResources.pageResources;
    navCategories = await getPageResources.navCategories;
    footerPages = await getPageResources.footerPages;
    // footerItems = await getPageResources.footerItems;
    // footerItemContent = await getPageResources.footerItemContent;
  } catch (e) {
    console.log(e);
  }
  // console.log(pageResources);
  const pageMeta = pageResources.meta[getLocale];
  const { cookies } = req;

  res.locals = {
    url,
    getLocale,
    pageResources,
    navCategories,
    footerPages,
    // footerItems,
    // footerItemContent,
    pageMeta,
    cookies,
  };

  next();
};
