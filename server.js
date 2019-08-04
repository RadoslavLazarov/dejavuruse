// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const engine = require('ejs-locals');
const i18n = require('i18n-express');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const setLocale = require('./scripts/middleware/setLocale');
const locals = require('./scripts/middleware/locals');
require('dotenv').config();

const app = express();

// Environments
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('views', `${__dirname}/templates`);
app.set('view engine', 'ejs');

// Middleware
app.use(favicon(path.join(__dirname, 'static', 'favicon-32x32.png')));
app.use(cookieParser());
// app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'dejavu',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true },
}));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(i18n({
  translationsPath: path.join(__dirname, 'locales'),
  siteLangs: ['bg', 'en'],
  textsVarName: 'translation',
  browserEnable: false,
  defaultLang: 'bg',
  cookieLangName: 'lang',
}));
app.use(setLocale);
app.use(locals);

// Controllers
const controllers = require('./controllers/index');

app.use('/', controllers.Home);
app.use('/lang', controllers.Locale);
app.use('/about', controllers.About);
app.use('/news', controllers.News);
app.use('/gallery', controllers.Gallery);
app.use('/video', controllers.Video);
app.use('/contacts', controllers.Contacts);
app.use('/test', controllers.Test);
app.use('*', (req, res) => {
  res.status(404).send('404');
});

// Connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:27017/dejavu', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// Run the server
app.listen(app.get('port'), () => console.log(`Express listening on port ${app.get('port')}`));
