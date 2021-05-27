var format = require("pg-format");
const pg = require("pg");
const client = new pg.Client({
  connectionString: process.env.URI,
  ssl: { rejectUnauthorized: false },
});

client.connect();

const getWorkers = (request, response) => {
  client.query("select * from workers", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getWorkers,
};
