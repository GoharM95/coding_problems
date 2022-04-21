// return array of words with a maximum length

function longestWords(str) {
  const strArr = str.split(" ");
  let size = 0;
  let max = [""];

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    if (word.length >= size) {
      size = word.length;
      if (max[max.length - 1].length < size) {
        max = [];
        max.push(word);
      } else {
        max = [...max, word];
      }
    }
  }
  return max;
}

console.log(longestWords("Hello my crazy buddy"));

// with reduce and filter
function longestWords(str) {
  const strArr = str.split(" ");
  const max = strArr.reduce((acc, currWord) => {
    acc < currWord.length ? (acc = currWord.length) : acc;
    return acc;
  }, 0);
  return strArr.filter((word) => word.length === max);
}

console.log(longestWords("Hello my crazy buddy"));
