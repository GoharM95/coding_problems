// write a function canConstruct(target, wordBank) that accepts target string and an array of strings.
// the  function should return a boolean indicating whether or not the target can be constructed
// by concatenatiing elements of the wordBank array.
// you may reuse elements of wordBank as many times as needed.

function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) {
    return memo[target];
  }

  if (target === "") {
    return true;
  }

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeeee",
  ])
);
