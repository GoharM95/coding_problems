// Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
// Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive
// Digit Duplications could occur , So also consider it when forming the Largest

// Codewars - Form The Largest
function maxNumber(num) {
  return +num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

console.log(maxNumber(123));
