var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var express_handlebars_sections = require('express-handlebars-sections');
var app = express();

var PORT = process.env.PORT || 5000;

// handlebars rout to static files - css, img
app.use(express.static('public'));

// bodyParser to translate urlform and json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/html_controller.js")(app)

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });