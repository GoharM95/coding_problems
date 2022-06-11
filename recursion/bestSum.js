// write function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
// the function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
// if there is a tie return one of the shortest.

function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(100, [1, 2, 5, 25]));
