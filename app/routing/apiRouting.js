// build out api
//connect json file to connect the array of objects
var friends = require("../data/friends.js");

// export to house everything 
// api get request that gets the friends data from the json
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

//api post requests
app.post("/api/friends", function(req, res) {
    var totalDifference = 0;
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };
    // take the results of the users survey posts and parse it converting the user score into a number instead of a string
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
        return parseInt(item, 10);
    });
    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: b
    };
    // console.log the results 
    console.log("Name: " + userName);
    console.log("User Score " + userScores);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of users score " + sum);
    console.log("Best matched friend diff " + bestMatch.friendDifference);
    console.log("\n++++++++++++++++++==================");

    // create a for loop to loop through all the friends possiblities
    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i].name);
        totalDifference = 0;
        console.log("Total Difference " + totalDifference);
        console.log("Best matched friend diff " + bestMatch.friendDifference);

        
    }
});
};



