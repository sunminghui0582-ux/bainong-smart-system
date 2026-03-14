const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: String,
  bio: String,
  image: String,
  email: String
});

module.exports = mongoose.model('Member', memberSchema);