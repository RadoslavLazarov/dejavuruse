const Home = require('./Home');
const About = require('./About');
const Locale = require('./Locale');
const CookiesConsent = require('./CookiesConsent');
const News = require('./News');
const Gallery = require('./Gallery');
const Video = require('./Video');
const Services = require('./Services');
const Contacts = require('./Contacts');
const PrivacyPolicy = require('./PrivacyPolicy');
const Cookies = require('./Cookies');
const TermsConditions = require('./TermsConditions');
const Test = require('./Test');

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
    app.use(`/${locale}/test`, Test);
  });
  app.use('/lang', Locale);
  app.use('/news', News);
  app.use('/cookies-consent', CookiesConsent);
  app.use('*', (req, res) => {
    res.status(404).send('404');
  });
};
