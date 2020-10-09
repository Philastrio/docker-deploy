const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "a30118975",
  database: "myapp",
});

exports.pool = pool;
