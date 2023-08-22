const Pool = require("pg").Pool;

const pool = new Pool({
  user: "elias",
  host: "localhost",
  database: "habits",
  port: 5432,
});

module.exports = pool;
