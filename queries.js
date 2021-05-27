var format = require("pg-format");
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

var CryptoJS = require("crypto-js");

const getWorkers = (request, response) => {
  pool.query("select * from wokers", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getWorkers,
};
