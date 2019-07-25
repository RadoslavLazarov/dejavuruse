const mongoose = require('mongoose');

const credential = new mongoose.Schema({
  name: {
    type: String,
  },
  credentials: {
    type: Object,
  },
  clientSecret: {
    type: Object,
  },
});

const credentialsModel = mongoose.model('Credentials', credential);

async function findCredentials(name) {
  const result = await credentialsModel.findOne({ name });
  return result;
}

async function createCredentials(name, token) {
  try {
    await credentialsModel.findOneAndUpdate({ name }, { credentials: token });
    console.log('Token stored in DB');
  } catch (e) {
    throw e;
  }
}

function credentials(name, token) {
  if (token) {
    this.createCredentials = createCredentials(name, token);
  }
  this.findCredentials = findCredentials(name);
}

module.exports = credentials;
