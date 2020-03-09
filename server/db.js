var mysql = require("mysql")
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "ryan",
  password: "ryan123!",
  database: "ryan-list"
})

module.exports = pool
