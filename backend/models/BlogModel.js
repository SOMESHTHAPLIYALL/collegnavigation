const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
