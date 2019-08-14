const mongoose = require('mongoose');

const credentials = new mongoose.Schema({
  id: {
    type: String,
  },
  credentials: {
    type: Object,
  },
});

const getCredentials = mongoose.model('Credentials', credentials);

async function findCredentials(id) {
  const credential = await getCredentials.findOne({ id });
  return credential;
}

function CredentialsModel(id) {
  this.findCredentials = findCredentials(id);
}

module.exports = CredentialsModel;
