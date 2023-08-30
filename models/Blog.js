const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  short_desc: String,
  description: String,
  image: String
});

module.exports = mongoose.model('Blog', blogSchema);
