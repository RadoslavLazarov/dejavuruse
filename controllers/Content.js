const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const fsExtra = require('fs-extra');
const { IncomingForm } = require('formidable');

const User = require('../models/users');
const Gallery = require('../models/gallery');
const dbModels = require('../models/dbModels');
const { galleryCategoriesModel } = require('../models/dbModels');
const TemplateResources = require('../models/templateResources');

const router = express.Router();

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log('!req.headers.authorization');
    // return res.status(401).send('Unauthorized request');
    return res.status(401).redirect('/content/login');
  }

  const token = req.headers.authorization.split(' ')[1];
  console.log('token value:', token);
  if (token === 'null') {
    console.log('token === null');
    // return res.status(401).send('Unauthorized request');
    return res.status(401).redirect('/content/login');
  }
  console.log('before payload');
  let payload;
  try {
    payload = jwt.verify(token, 'secretKey');
  } catch (err) {
    console.log('catch error of verify function in middleware');
    // return res.status(401).redirect('/content/login');
    return res.status(401).send('Unauthorized request');
  }

  console.log('payload:', payload);
  if (!payload) {
    console.log('!payload');
    // return res.status(401).send('Unauthorized request');
    return res.status(401).redirect('/content/login');
  }

  req.userId = payload.subject;
  next();
};

router.post('/server', verifyToken, (req, res) => {
  const { action } = req.query;
  const collection = `${req.query.collection}Model`;
  const { document } = req.query;
  const { item } = req.query;
  const model = dbModels[collection];

  const deleteOldFile = () => new Promise((resolve, reject) => {
    fs.readdir(`./static/${req.query.location}/`, (err, files) => {
      const oldFile = files.filter(file => file.includes(req.query.filename));
      console.log(oldFile);

      fsExtra.remove(`./static/${req.query.location}/${oldFile[0]}`)
        .then(() => {
          resolve();
        })
        .catch((e) => {
          console.error(e);
          reject();
        });
    });
  });

  switch (action) {
    case 'upload': {
      deleteOldFile().then(() => {
        const form = new IncomingForm();

        form.on('error', (e) => {
          console.error(e);
        });

        form.on('fileBegin', (name, file) => {
          const formFile = file;
          const oldFileName = formFile.name;

          formFile.name = `${req.query.filename}.${oldFileName.split('.').slice(-1)[0]}`;
          formFile.path = `./static/${req.query.location}/${formFile.name}`;
        });

        form.on('file', async (name, file) => {
          console.log(`Uploaded: ${file.name}`);
          // Save filename to DB
          await model.findOneAndUpdate({ id: document }, { [item]: `/static/${req.query.location}/${file.name}` }, { new: true });
        });

        form.on('end', () => {
          res.json({ success: true });
        });

        form.parse(req);
      });
      break;
    }
    default:
      break;
  }
});

router.post('/db', verifyToken, async (req, res) => {
  // console.log(req.query.options);
  let db;

  try {
    db = await new TemplateResources(null, req).db();
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
  // console.log(db);
  return res.json(db);
});

router.get('/home-fetch', verifyToken, (req, res) => {
  // console.log(req.userId);
  res.json({ home: 'fetched from home' });
});

// router.get('/get-pages', verifyToken, async (req, res) => {
//   let pages;

//   try {
//     pages = await TemplateResources.getPages();
//   } catch (e) {
//     console.log(e);
//     return res.sendStatus(500);
//   }

//   return res.json(pages);
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
  fs.readFile('cms/dist/cms/index.html', 'utf8', (err, file) => {
    if (err) {
      return res.status(404).render('404');
    }
    res.status(200).send(file);
  });
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

module.exports = router;
