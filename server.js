// Module dependencies
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const engine = require('ejs-locals');

const app = express();

// All environments
app.set('port', 3000);
app.engine('ejs', engine);
app.set('views', `${__dirname}/templates`);
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'dejavu',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));
app.use('/static', express.static(path.join(__dirname, 'static')));

// Controllers
const Home = require('./controllers/Home');

app.use('/', Home);

const { initDb } = require('./db');

// Connect to DB and run the server
initDb(() => {
  app.listen(app.get('port'), () => console.log(`Express listening on port ${app.get('port')}`));
});
