//--------------------------------------
//Dependencies
//--------------------------------------
var players = require("../data/nbaplayers")
var express = require("express");
var router = express.Router();
var path = require('path');

//--------------------------------------
//Enable API routing and comparison logic
//--------------------------------------
router.get("/", function(req, res) {
  return res.json(players);
});

router.post("/", function(req, res) {
  var user = {
    name: req.body.name,
    photo: req.body.photo,
    scores: []
  };

  //Hacky way to get correct values from input (previously returning array of 20 with every second being NaN)
  var scoresArrayOld = [];
  for (var i = 0; i < req.body.scores.length; i++) { scoresArrayOld.push(parseInt(req.body.scores[i]))}
  var scoresArray = [];
  for (var i = 0; i < scoresArrayOld.length; i = i + 2) { scoresArray.push(scoresArrayOld[i])};
  user.scores = scoresArray;

  //Comparison logic
  var scoreComparisionArray = [];
  for (var i = 0; i < players.length; i++) {
    var currentComparison = 0;
    for (var j = 0; j < user.scores.length; j++) {
      currentComparison += Math.abs(user.scores[j] - players[i].scores[j]);
      console.log(currentComparison)
    }
    // Push each comparison between friends to array
    scoreComparisionArray.push(currentComparison);
  }
  // Determine the best match using the postion of best match in the players array
  var playerPosition = 0; // assume its the first player to start
  for (var i = 1; i < scoreComparisionArray.length; i++) {
    // Lower number in comparison difference means better match
    if (scoreComparisionArray[i] <= scoreComparisionArray[playerPosition]) {
      playerPosition = i;
    }
  }
  // If same score, last player will always be disaplyed
  var yourNBAPlayer = players[playerPosition];
  // Reply with a JSON object of the best match
  res.json(yourNBAPlayer);
});
//--------------------------------------
//Enable API routing
//--------------------------------------
module.exports = router;
