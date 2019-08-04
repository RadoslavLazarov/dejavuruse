const mongoose = require('mongoose');

const credentials = new mongoose.Schema({
  id: {
    type: String,
  },
  credentials: {
    type: Object,
  },
});

module.exports = mongoose.model('Credentials', credentials);
