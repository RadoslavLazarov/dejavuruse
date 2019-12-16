const getCurrentUrl = require('../getCurrentUrl');
const TemplateResources = require('../../models/templateResources');

module.exports = async (req, res, next) => {
  const url = getCurrentUrl(req);
  const getLocale = req.path.split('/')[1];
  const templateResources = new TemplateResources(url);
  let controllerResources;
  let pageResources;
  let navCategories;
  let footerPages;
  let pageMeta;

  try {
    controllerResources = await templateResources.getControllerResources();
    pageResources = await templateResources.getPageResources();
    navCategories = await TemplateResources.getNavCategories();
    footerPages = await TemplateResources.getFooterPages();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
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
