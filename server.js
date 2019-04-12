var express = require("express");
var path = require("path");
// var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/melons_controller.js");

app.use(routes);

app.listen((process.env.PORT || 8080), function() {
  console.log("Server listening on: localhost:" + PORT);
});
