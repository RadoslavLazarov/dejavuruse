const getCurrentUrl = require('../getCurrentUrl');
const PageResourcesModel = require('../pageResources');

module.exports = async (req, res, next) => {
  const url = getCurrentUrl(req);
  const getLocale = req.path.split('/')[1];
  const getPageResources = new PageResourcesModel(url);
  let controllerResources;
  let pageResources;
  let navCategories;
  let footerPages;
  let pageMeta;

  try {
    controllerResources = await getPageResources.controllerResources;
    pageResources = await getPageResources.pageResources;
    navCategories = await getPageResources.navCategories;
    footerPages = await getPageResources.footerPages;
    // console.log(pageResources);
  } catch (e) {
    console.log(e);
  }

  if (pageResources !== null) {
    pageMeta = pageResources.meta[getLocale];
  }

  const { cookies } = req;

  res.locals.globalLocals = {
    url,
    getLocale,
    controllerResources,
    pageResources,
    navCategories,
    footerPages,
    pageMeta,
    cookies,
  };

  next();
};
