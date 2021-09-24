//import postgres libraries
const Pool = require("pg").Pool;

//instance the pool
const client = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "testStudy",
});

//export database
module.exports = client;
