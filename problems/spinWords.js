// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) =>
// returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// Codewars - Stop gninnipS My sdroW!

// not efficient
function spinWords(str) {
  let result = "";

  if (!str.includes(" ") && str.length >= 5) {
    result = str.split("").reverse().join("");
  } else {
    result = str;
  }

  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    if (word.length >= 5) {
      strArr[i] = word.split("").reverse().join("");
    } else {
      strArr[i] = word;
    }
  }
  if (strArr) {
    return strArr.join(" ");
  }
  return result;
}

// with map
function spinWords(str) {
  return str
    .split(" ")
    .map((word) => (word.length >= 5 ? reverseWord(word) : word))
    .join(" ");
}

function reverseWord(word) {
  return word.split("").reverse().join("");
}

console.log(spinWords("Just kidding there is still one more"));
