const mongoose = require('mongoose')
require('dotenv').config()

mongoose.Promise = global.Promise
const DB_URL = process.env.DB_URL


module.exports = mongoose.connect(
  DB_URL
  , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })