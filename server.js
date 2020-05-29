var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

// apply routes
app.use(express.static("app/public"));
// allows express to read the body and then parse that into Json object
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require("./app/routing/apiRouting.js")(app);
require("./app/routing/htmlRouting.js")(app);

app.listen(port, () => console.log("Listening on port %s", port));

