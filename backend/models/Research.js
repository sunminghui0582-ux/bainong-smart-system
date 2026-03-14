const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  type: String, // paper, patent, etc.
  link: String
});

module.exports = mongoose.model('Research', researchSchema);