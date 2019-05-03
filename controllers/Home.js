const express = require('express');
const { getDb } = require('../db');

const router = express.Router();

let categories;

// middleware that is specific to this router
router.use((req, res, next) => {
  const db = getDb();
  db.collection('categories').find({}).toArray((err, result) => {
    categories = result;
  });
  next();
});

// define the home page route
router.get('/', (req, res) => {
  console.log(categories);
  res.render('home', {
    title: 'Dejavu',
    categories,
  });
});

// define the about route
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'Dejavu',
    categories,
  });
});

module.exports = router;
