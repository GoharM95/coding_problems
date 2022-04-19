// Given a string, capitalize the letters that occupy even indexes and
// odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

// Codewars - Alternate capitalization
function capitalize(str) {
  const arr1 = str.split("");
  const arr2 = str.split("");

  arr1.forEach((item, index, originalArr) => {
    if (index % 2 === 0) {
      originalArr[index] = item.toUpperCase();
    }
  });

  arr2.forEach((item, index, originalArr) => {
    if (index % 2 === 1) {
      originalArr[index] = item.toUpperCase();
    }
  });

  const finalArr1Str = arr1.join("");
  const finalArr2Str = arr2.join("");
  return [finalArr1Str, finalArr2Str];
}

console.log(capitalize("abcdef"));
