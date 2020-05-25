var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 8089;

// allows express to read the body and then parse that into Json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// apply routes
app.use(express.static("app/public"));

require("./app/routing/apiRouting.js")(app);
require("./app/routing/apiRouting.js")(app);

app.listen(port, () => console.log("Listening on port %s", port));

// module.exports = function(app) {
//   //code here
// }