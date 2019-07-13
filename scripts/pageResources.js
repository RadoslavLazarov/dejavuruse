/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */

const fs = require('fs');
const Categories = require('../models/categories');

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
  let modelsDirectory;

  if (controller) {
    categories = await Categories.findOne({ id: url.controller }).select('name meta imageCover subPages content -_id');
    pageResources = categories;
    modelsDirectory = fs.readdirSync('./models/').indexOf(`${categories.subPages}.js`) !== -1;

    if (url.currentPage !== url.controller) {
      if (categories.subPages && modelsDirectory) {
        const GetModel = require(`../models/${categories.subPages}`);
        const model = new GetModel().Model;
        const subPages = await model.findOne({ id: url.currentPage }).select('name meta imageCover -_id');
        pageResources = subPages;
      }
      pageResources = categories;
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
    { isVisible: true, navPosition: 'left' }, null, { sort: { priority: 1 } },
  );
  mainCategories.right = await Categories.find(
    { isVisible: true, navPosition: 'right' }, null, { sort: { priority: 1 } },
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
 * PageResources class that represents the current page resources
 * @param {Object} url - current URL
 * @constructor
 */
function PageResources(url) {
  this.pageResources = getPageResources(url);
  this.navCategories = getNavCategories();
}

module.exports = PageResources;
