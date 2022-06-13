// write a function countConstruct(target, wordBank) that accepts target string and an array of strings.
// the  function should return the number of ways that the target can be constructed
// by concatenatiing elements of the wordBank array.
// you may reuse elements of wordBank as many times as needed.

function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) {
    return memo[target];
  }

  if (target === "") {
    return 1;
  }

  let totalWaysCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const waysCount = countConstruct(suffix, wordBank, memo);
      totalWaysCount += waysCount;
    }
  }

  memo[target] = totalWaysCount;
  return totalWaysCount;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeeee",
  ])
);
