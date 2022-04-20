// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

// Codewars - No oddities here
function noOdds(values) {
  //   for (let  i = 0; i < values.length; i++) {
  //     const value = values[i];
  //     if (value % 2 === 1) {
  //       values.splice(i, 1);
  //     }
  //   }
  //       return values;

  return values.filter((value) => value % 2 === 0);
}
