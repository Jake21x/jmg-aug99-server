var format = require("pg-format");
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.User,
  host: process.env.host,
  database: process.env.Database,
  password: process.env.Password,
  port: process.env.Port,
});

var CryptoJS = require("crypto-js");

const getWorkers = (request, response) => {
  pool.query("select * from workers", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getWorkers,
};
