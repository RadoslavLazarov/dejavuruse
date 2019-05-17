/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */

const Categories = require('../models/categories');
const { locale } = require('./getLocale');

const getPageMeta = async (page) => {
  let pageMeta;

  try {
    const dbResponse = () => {
      return new Promise((resolve, reject) => {
        Categories.find({ id: page }, (err, docs) => {
          err ? reject(err) : resolve(docs);
        });
      });
    };
    const mainCategories = await dbResponse();

    // Returns meta data from current locale
    for (const category of mainCategories) {
      pageMeta = category.meta[locale()];
    }
  } catch (e) {
    console.log(e);
  }

  return pageMeta;
};

const getNavCategories = async () => {
  let mainCategories;

  try {
    const dbResponse = () => {
      return new Promise((resolve, reject) => {
        Categories.find({ isVisible: true }, null, { sort: { priority: 1 } }, (err, docs) => {
          err ? reject(err) : resolve(docs);
        });
      });
    };

    mainCategories = await dbResponse();
  } catch (e) {
    console.log(e);
  }

  return mainCategories;
};

module.exports = {
  getPageMeta,
  getNavCategories,
};
