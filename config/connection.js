// Set up MySQL connection.
var mysql = require("mysql");
let connection;
if (process.env.CLEARDB_DATABASE_URL='mysql://b522b39542d745:d39fc5c0@us-cdbr-iron-east-04.cleardb.net/heroku_6522e6b8ebb96d0?reconnect=true') {
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL='mysql://b522b39542d745:d39fc5c0@us-cdbr-iron-east-04.cleardb.net/heroku_6522e6b8ebb96d0?reconnect=true');
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Identity&1",
  database: "burgers_db"
  });
}


// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
