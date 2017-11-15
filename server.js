//--------------------------------------
//Node Dependencies
//--------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//--------------------------------------
//Routing
//--------------------------------------
var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('./app/routing/html-routes.js');

//--------------------------------------
//Set up App
//--------------------------------------
var app = express();
var PORT = process.env.PORT || 3000;


//--------------------------------------
//Set up Express to handle data parsing
//--------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//--------------------------------------
//Routing map
//--------------------------------------
apiRoutes(app);
htmlRoutes(app);

//--------------------------------------
//Listener
//--------------------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
