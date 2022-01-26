const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: { type: String, unique: true, dropDups: true },
  description: String,
  thumbnail: String,
  releaseDate: String
});

module.exports = mongoose.model("Movie", schema);
