const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: { type: String, unique: true, dropDups: true },
  password: String,

});

module.exports = mongoose.model("User", schema);