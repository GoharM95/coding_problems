// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Codewars -  Vowel Count

// loops
function getVowelsCount(str) {
  const vowels = ["a", "e", "i", "o"];
  let vowelsCount = 0;

  for (let char of str) {
    for (let vowel of vowels) {
      if (char === vowel) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

console.log(getVowelsCount("hellooo"));

// switch
function getVowelsCount(str) {
  const strArr = str.split("");
  let vowelsCount = 0;

  for (let char of strArr) {
    switch (char) {
      case "a":
        vowelsCount++;
        break;
      case "e":
        vowelsCount++;
        break;
      case "i":
        vowelsCount++;
        break;
      case "o":
        vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getVowelsCount("hellooo"));
