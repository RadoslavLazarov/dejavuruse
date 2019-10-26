const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const User = require('../models/users');
const Gallery = require('../models/gallery');
const { galleryCategoriesModel } = require('../models/dbModels');

const router = express.Router();

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    // return res.status(401).send('Unauthorized request');
    return res.status(401).redirect('/content/login');
  }

  const token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    // return res.status(401).send('Unauthorized request');
    return res.status(401).redirect('/content/login');
  }

  const payload = jwt.verify(token, 'secretKey');
  if (!payload) {
    // return res.status(401).send('Unauthorized request');
    return res.status(401).redirect('/content/login');
  }

  req.userId = payload.subject;
  next();
};

router.get('/', verifyToken, (req, res) => {
  console.log(req.userId);
  res.json({ home: 'fetched from home' });
});

// router.post('/register', (req, res) => {
//   if (!req.body.name || !req.body.pass) {
//     return res.sendStatus(400);
//   }

//   User.findOne({ username: req.body.name }, (err, user) => {
//     // check for error or existing user
//     if (err || user) {
//       return res.json({ success: false });
//     }

//     // create a new user
//     if (user === null) {
//       const testUser = new User({
//         username: req.body.name,
//         password: req.body.pass,
//       });

//       testUser.save();
//       return res.json({ success: true });
//     }
//   });
// });

router.post('/login', (req, res) => {
  if (!req.body.name || !req.body.pass) {
    return res.sendStatus(400);
  }

  // fetch user and test password verification
  User.findOne({ username: req.body.name }, (err, user) => {
    if (err || !user) {
      return res.json({ success: false });
    }

    // test a matching password
    user.comparePassword(req.body.pass, (error, isMatch) => {
      if (error || !isMatch) {
        return res.json({ success: false });
      }
      const payload = { subject: user._id };
      const token = jwt.sign(payload, 'secretKey');
      // console.log(payload);
      return res.json({ success: true, token });
    });
  });
  // });
});

router.get('/http-test', verifyToken, async (req, res) => {
  const galleryCategories = new Gallery(null, null, galleryCategoriesModel);
  let getGalleryCategories;

  try {
    getGalleryCategories = await galleryCategories.findCategories();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  res.json(getGalleryCategories);
});

router.get('/*', (req, res) => {
  fs.readFile('static/cms/index.html', 'utf8', (err, file) => {
    if (err) {
      return res.status(404).render('404');
    }
    res.send(file);
  });
});

module.exports = router;
