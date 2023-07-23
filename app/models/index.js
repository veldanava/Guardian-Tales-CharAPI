const dbConfig = require("../config/database");
const mongoose = require("mongoose");

// interconnection to database
module.exports = {
  mongoose,
  url: dbConfig.url,
  gt: require("./gt.js")(mongoose)
};