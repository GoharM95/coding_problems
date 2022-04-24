// count letters

function countLetters(str) {
  const strArr = str.split("");
  let letters = [];
  let count = 1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      count++;
    } else {
      const value = `${count}${strArr[i]}`;
      letters = [...letters, value];
      count = 0;
    }
  }
  return letters.join("");
}

console.log(countLetters("fffftttthhhh"));
