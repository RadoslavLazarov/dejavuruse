const client = require('mongodb').MongoClient;

// DB configuration
const db = {
  connectionString: 'mongodb+srv://radoslav:123radoslav456@cluster0-2v9az.mongodb.net/test?retryWrites=true',
  connectionOptions: {
    useNewUrlParser: true,
  },
  dbName: 'dejavu',
  collectionName: 'categories',
};

// DB Initialization
let _db;

function initDb(callback) {
  if (_db) {
    console.warn('Trying to init DB again!')
    return callback(null, _db);
  }
  client.connect(db.connectionString, db.connectionOptions, connected);
  function connected(err, client) {
    if (err) {
      console.log(err);
      return callback(err);
    }
    console.log(`DB initialized - connected to: ${db.connectionString.split('@')[1]}`)
    _db = client.db(db.dbName);

    return callback(null, _db);
  }
}

function getDb() {
  return _db.collection(db.collectionName);
}

module.exports = {
  getDb,
  initDb,
};
