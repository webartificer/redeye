// Define a model for the bookmarks
var mongoose = require('mongoose');

// Bookmark Schema
var urlSchema = mongoose.Schema({
  name: String,
  url: String,
  tags: [String],
  addDate: Date
});

// Use the schema to define a model
var Bookmark = mongoose.model('Bookmark', urlSchema);

module.exports = Bookmark;
