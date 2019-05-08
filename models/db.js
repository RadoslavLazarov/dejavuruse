/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */

const { getDb } = require('../db');

async function getMainCategories() {
  let mainCategories;
  try {
    const dbResponse = () => {
      return new Promise((resolve, reject) => {
        const db = getDb();
        db.find({}).sort({ priority: 1 }).toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    };
    mainCategories = await dbResponse();
  } catch (e) {
    console.log(e);
  }

  return mainCategories;
}

async function getPageMeta(page) {
  let mainCategories;
  let pageMeta;
  try {
    const dbResponse = () => {
      return new Promise((resolve, reject) => {
        const db = getDb();
        db.find({ 'id': page }).toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    };
    mainCategories = await dbResponse();
  } catch (e) {
    console.log(e);
  }

  for (const category of mainCategories) {
    pageMeta = category.meta;
  }
  // console.log(pageMeta.description);
  return pageMeta;
}

module.exports = {
  getMainCategories,
  getPageMeta,
};
