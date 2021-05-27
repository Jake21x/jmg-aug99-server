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

app.get("/", (request, response) => {
  var encrypt = CryptoJS.AES.encrypt("aug99", process.env.pkey).toString();
  response.json({
    info: "aug99",
    version: encrypt,
    raw: msg,
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`App running on port ${port}.`);
});
