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
