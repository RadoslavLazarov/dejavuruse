/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */
const fs = require('fs');
const Categories = require('../models/categories');

async function getPageResources(url) {
  const modelsDirectory = [];
  let categories;
  let pageResources;

  fs.readdirSync('./models/').forEach((file) => {
    modelsDirectory.push(file);
  });

  if (url.controller) {
    categories = await Categories.findOne({ id: url.controller }).select('name meta imageCover subPages content -_id');
    pageResources = categories;
    if (url.currentPage !== url.controller) {
      if (categories.subPages && modelsDirectory.indexOf(categories.subPages) === 1) {
        const GetModel = require(`../models/${categories.subPages}`);
        const model = new GetModel().Model;
        const subPages = await model.findOne({ id: url.currentPage }).select('name meta imageCover -_id');
        pageResources = subPages;
      } else {
        const GetModel = require(`../models/${categories.subPages}`);
        const model = new GetModel().Model;
        const subPages = await model.findOne({ id: url.subPage }).select('name meta imageCover -_id');
        pageResources = subPages;
      }
    }
  } else {
    pageResources = await Categories.findOne({ id: 'home' });
  }

  return pageResources;
}

async function getNavCategories() {
  const mainCategories = {};

  mainCategories.left = await Categories.find(
    { isVisible: true, navPosition: 'left' }, null, { sort: { priority: 1 } },
  );
  mainCategories.right = await Categories.find(
    { isVisible: true, navPosition: 'right' }, null, { sort: { priority: 1 } },
  );
  console.log(mainCategories.length);
  return mainCategories;
}

function PageResources(url) {
  this.pageResources = getPageResources(url);
  this.navCategories = getNavCategories();
}

module.exports = PageResources;
