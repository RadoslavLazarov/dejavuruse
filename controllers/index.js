const fs = require('fs');
const Home = require('./Home');
const About = require('./About');
const Locale = require('./Locale');
const SetCookies = require('./SetCookies');
const Gallery = require('./Gallery');
const Video = require('./Video');
const Services = require('./Services');
const Contacts = require('./Contacts');
const PrivacyPolicy = require('./PrivacyPolicy');
const Cookies = require('./Cookies');
const TermsConditions = require('./TermsConditions');
// const Content = require('./Content');

const { locales } = require('../scripts/middleware/i18n');

module.exports = (app) => {
  // Redirect home page if url missing locale
  app.get('/', (req, res) => {
    const langCookie = req.cookies.lang;
    if (langCookie) {
      res.redirect(`/${langCookie}/`);
    } else {
      res.redirect('/bg/');
    }
  });

  // Crate a route for every locale
  locales.forEach((locale) => {
    app.use(`/${locale}`, Home);
    app.use(`/${locale}/about`, About);
    app.use(`/${locale}/gallery`, Gallery);
    app.use(`/${locale}/video`, Video);
    app.use(`/${locale}/services`, Services);
    app.use(`/${locale}/contacts`, Contacts);
    app.use(`/${locale}/privacy-policy`, PrivacyPolicy);
    app.use(`/${locale}/cookies`, Cookies);
    app.use(`/${locale}/terms-conditions`, TermsConditions);
    // Redirect old urls
    app.get(`/${locale}/index.php`, (req, res) => {
      res.redirect(301, `/${locale}`);
    });
    app.get(`/${locale}/aboutus.php`, (req, res) => {
      res.redirect(301, `/${locale}/about`);
    });
    app.get(`/${locale}/gallery.php`, (req, res) => {
      res.redirect(301, `/${locale}/gallery`);
    });
    app.get(`/${locale}/foryou.php`, (req, res) => {
      res.redirect(301, `/${locale}/services`);
    });
    app.get(`/${locale}/contacts.php`, (req, res) => {
      res.redirect(301, `/${locale}/contacts`);
    });
    app.get(`/${locale}/conditions.php`, (req, res) => {
      res.redirect(301, `/${locale}/terms-conditions`);
    });
  });
  app.use('/lang', Locale);
  app.use('/set-cookies', SetCookies);
  app.get('/sitemap.xml', (req, res) => {
    fs.readFile('sitemap.xml', (err, file) => {
      if (err) {
        return res.status(404).render('404');
      }
      res.header('Content-Type', 'application/xml');
      res.status(200).send(file);
    });
  });
  // app.use('/content', Content);
  app.use('*', (req, res) => {
    res.status(404).render('404');
  });
};
