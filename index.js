// https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
// https://devcenter.heroku.com/articles/heroku-cli
// https://github.com/heroku/heroku-builds
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const CryptoJS = require("crypto-js");
const db = require("./queries");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/workers", db.getWorkers);

app.get("/", (request, response) => {
  var encrypt = CryptoJS.AES.encrypt("aug99", process.env.pkey).toString();
  response.json({
    info: "aug99",
    version: encrypt,
    raw: "aug99",
  });
});

app.listen(4100, () => {
  console.log(`App running on port 4100`);
});
