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

    // create a for loop to loop through all the friends possiblities in the database
    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i].name);
        totalDifference = 0;
        console.log("Total Difference " + totalDifference);
        console.log("Best matched friend diff " + bestMatch.friendDifference);

        var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0);
        console.log("Total friend score " + bfriendScore);
        totalDifference += Math.abs(sum - bfriendScore);
        console.log("------------------------------------> " + totalDifference);

        // create the if statement that will sum the differences and determine the best match for the best friend
        if(totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
        }
        console.log(totalDifference + " Total Difference");
    }
    // save the users data to the database and return a json with the users best match 
    console.log(bestMatch);
    friends.push(userData);
    console.log("New User added");
    console.log(userData);
    res.json(bestMatch);
});
};



