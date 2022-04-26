// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

const { func } = require("prop-types");

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Codewars - Total amount of points
function footballMatchPointsCount(games) {
  let total = 0;

  for (let i = 0; i < games.length; i++) {
    const currScore = games[i];

    const currPoints = currScore.split(":");

    const x = currPoints[0];
    const y = currPoints[1];

    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    }
  }
  return total;
}

console.log(
  footballMatchPointsCount([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ])
);
