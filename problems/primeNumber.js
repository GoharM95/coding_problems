function countLetters(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(countLetters(8));
console.log(countLetters(11));

// with sqrt
function countLetters(num) {
  if (num < 2) {
    return false;
  }
  const root = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(countLetters(8));
console.log(countLetters(11));
