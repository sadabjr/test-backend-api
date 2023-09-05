const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
  },
  description: {
    type: Array,
  },
  imgFile: {
    data: Buffer,
    contentType: String,
  },
  subtitle: {
    type: String,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
