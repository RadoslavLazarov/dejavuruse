// Dependencies
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const engine = require('ejs-locals');
const i18n = require('i18n-express');
const cookieParser = require('cookie-parser');

const app = express();

// Environments
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('views', `${__dirname}/templates`);
app.set('view engine', 'ejs');

// Middleware
app.use(cookieParser());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
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
  paramLangName: 'lang',
}));

// Controllers
const { Home, About, Locale } = require('./controllers/index');

app.use('/', Home);
app.use('/about', About);
app.use('/lang', Locale);

// Connect to DB and run the server
const { initDb } = require('./db');

initDb(() => {
  app.listen(app.get('port'), () => console.log(`Express listening on port ${app.get('port')}`));
});
