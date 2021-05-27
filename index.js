// https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
// https://devcenter.heroku.com/articles/heroku-cli
// https://github.com/heroku/heroku-builds
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
var cors = require("cors");
const port = 5100;

app.use(cors());
app.use(express.json());

var CryptoJS = require("crypto-js");

app.get("/workers", db.getWorkers);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.listen(process.env.PORT || port, () => {
  console.log(`App running on port ${port}.`);
});
