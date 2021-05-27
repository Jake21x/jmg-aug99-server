// // https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
// // https://devcenter.heroku.com/articles/heroku-cli
// // https://github.com/heroku/heroku-builds
// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const db = require("./queries");
// var cors = require("cors");
// const port = 5100;

// app.use(cors());
// app.use(express.json());

// var CryptoJS = require("crypto-js");

// app.get("/workers", db.getWorkers);

// app.get("/", (request, response) => {
//   var encrypt = CryptoJS.AES.encrypt("aug99", process.env.pkey).toString();
//   response.json({
//     info: "aug99",
//     version: encrypt,
//     raw: "aug99",
//   });
// });

// app.listen(process.env.PORT || port, () => {
//   console.log(`App running on port ${port}.`);
// });

import dotenv from "dotenv";
import Fastify from "fastify";

dotenv.config();
const fast = Fastify();

import pg from "pg";
const Pool = pg.Pool;
const pool = new Pool({
  user: process.env.User,
  host: process.env.host,
  database: process.env.Database,
  password: process.env.Password,
  port: 5432,
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = process.env.PORT_ONE || 4100;

pool.query("SELECT NOW()", (err, res) => {
  console.log(`db connection status:`, { res, err });
});

fast.get("/", async (req, reply) => {
  pool.query("SELECT now", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

fast.listen(port, () => {
  console.log("fastify running", port);
});
