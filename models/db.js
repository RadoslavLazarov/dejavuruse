/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */

const { getDb } = require('../db');

const getPageMeta = async (locale, page) => {
  let pageMeta;

  try {
    const dbResponse = () => {
      return new Promise((resolve, reject) => {
        const db = getDb();
        db.collection('categories').find({ 'id': page }).toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    };
    const mainCategories = await dbResponse();

    // Returns meta data from current locale
    for (const category of mainCategories) {
      pageMeta = category.meta[locale];
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
        const db = getDb();
        db.collection('categories').find({ 'isVisible': true }).sort({ priority: 1 }).toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    };
    mainCategories = await dbResponse();
  } catch (e) {
    console.log(e);
  }

  return mainCategories;
};

const getNewsArticles = async () => {
  let articles;

  try {
    const dbResponse = () => {
      return new Promise((resolve, reject) => {
        const db = getDb();
        db.collection('articles').find({ 'isVisible': true }).toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    };
    articles = await dbResponse();
  } catch (e) {
    console.log(e);
  }

  return articles;
};

module.exports = {
  getPageMeta,
  getNavCategories,
  getNewsArticles,
};
