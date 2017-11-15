//--------------------------------------
//Dependencies
//--------------------------------------
var players = require("../../data/nbaplayers")
var express = require("express");
var router = express.Router();
var path = require('path');

//--------------------------------------
//Enable API routing and comparison logic
//--------------------------------------
router.get("/", function(req, res) {
  console.log("can you see this?")
  console.log(players)
  return res.json(players);
});

router.post("/api/scores", function(req, res) {
  /*Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
  * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
    * Example:
      * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
      * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
      * Total Difference: **2 + 1 + 2 =** **_5_**
  * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
  * The closest match will be the user with the least amount of difference.*/
});

//--------------------------------------
//Enable API routing
//--------------------------------------
module.exports = router;
