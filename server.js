// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const engine = require('ejs-locals');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const controllers = require('./controllers/index');
const i18n = require('./scripts/middleware/i18n');
const globalLocals = require('./scripts/middleware/globalLocals');

dotenv.config();
const app = express();

// Environments
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('views', `${__dirname}/templates`);
app.set('view engine', 'ejs');

// Middleware
app.use(cors());
app.use(favicon(path.join(__dirname, 'static', 'favicon-32x32.png')));
app.use(cookieParser());
// app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'dejavu',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(i18n.init);
app.use(i18n.setLocale);
app.use(globalLocals);

// Execute controllers
controllers(app);

// Connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
// mongoose.connect('mongodb://localhost:27017/dejavu', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// Run the server
app.listen(app.get('port'), () =>
  console.log(`Express listening on port ${app.get('port')}`)
);
