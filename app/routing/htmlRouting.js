var path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req.res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.use(function(req.res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}

created routing paths to apply to buttons and use app.use to make as teh defualt