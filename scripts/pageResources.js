/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */

const Categories = require('../models/categories');
const pageHelper = require('../scripts/helpers/pageHelpers');

/**
 * According to the URL, the page resources are obtained
 * @param {Object} url - current URL
 * @returns {Object} an object that contains rosources for current page
 */
async function getPageResources(url) {
  const getCategories = await Categories.find().select('id -_id');
  const controller = getCategories.find(category => category.id === url.controller);
  let categories;
  let pageResources;

  if (controller) {
    categories = await Categories.findOne({ id: url.controller });
    pageResources = categories;

    if (url.controller === 'gallery' && url.currentPage !== url.controller) {
      const getGalleryResources = await pageHelper.galleryResources(url);
      pageResources = getGalleryResources;
    }
  } else {
    pageResources = await Categories.findOne({ id: 'home' });
  }

  return pageResources;
}

/**
 * @returns {Object} an object that contains rosources for header
 */
async function getNavCategories() {
  const mainCategories = {};

  mainCategories.left = await Categories.find(
    { showOnHeader: true, navPosition: 'left' }, null, { sort: { priority: 1 } },
  );
  mainCategories.right = await Categories.find(
    { showOnHeader: true, navPosition: 'right' }, null, { sort: { priority: 1 } },
  );
  mainCategories.contacts = await Categories.findOne(
    { id: 'contacts' },
  ).select('content');

  mainCategories.headerContacts = [];
  mainCategories.contacts.content.contacts.forEach((contact) => {
    if (contact.showOnHeader) {
      mainCategories.headerContacts.push(contact);
    }
  });

  mainCategories.headerSocials = [];
  mainCategories.contacts.content.socials.forEach((social) => {
    if (social.showOnHeader) {
      mainCategories.headerSocials.push(social);
    }
  });

  return mainCategories;
}

/**
 * @returns {Object} an object that contains footer pages
 */
async function getFooterPages() {
  let footerPages = {};

  footerPages = await Categories.find(
    { showOnFooter: true }, null, { sort: { priority: 1 } },
  );

  return footerPages;
}

/**
 * PageResources class that represents the current page resources
 * @param {Object} url - current URL object
 * @constructor
 */
function PageResources(url) {
  this.pageResources = getPageResources(url);
  this.navCategories = getNavCategories();
  this.footerPages = getFooterPages();
}

module.exports = PageResources;
