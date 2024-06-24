const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  first: {
    type: String,

  },
  second: {
    type: String,

  },
  createdAt: {
    type: Date,
    default: Date.now

  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
