var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var Sequelize = require("sequelize");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var sequelize = new Sequelize('burgerssequelized_db', 'root', 'Identity&1', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
sequelize.authenticate()
.then(() => console.log('database connected'));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get('/', function(req, res){

  res.send("index");
})
app.use("/burgers", require("./routes/burgers"));
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
