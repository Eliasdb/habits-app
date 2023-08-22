const Pool = require("pg").Pool;

const pool = new Pool({
  user: "elias",
  host: "localhost",
  database: "elias",
  port: 5432,
});

module.exports = pool;
