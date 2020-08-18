const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  genre: String,
  status: String,
  assetType: String,
  authorId: String,
});

module.exports = mongoose.model('Book', bookSchema);
