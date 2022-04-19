// Your task is simply to count the total number of lowercase letters in a string.

// lowercaseCount("abc"); ===> 3
// lowercaseCount("abcABC123"); ===> 3
// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
// lowercaseCount(""); ===> 0;
// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

// Codewars - Regex count lowercase letters
function lowercaseCount(str) {
  const result = str.match(/[a-z]/g);
  return result ? result.length : 0;
}

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
