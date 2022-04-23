// return false if values aren't unique

function uniqueValues(str) {
  const values = [];
  for (let char of str) {
    if (values.indexOf(char) !== -1) {
      return false;
    }
    values.push(char);
  }
  return true;
}

console.log(uniqueValues("abacdef"));

// with a lastIndexOf
function uniqueValues(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i] !== i)) {
      return false;
    }
  }
  return true;
}

console.log(uniqueValues("abacdef"));

// with an object
function uniqueValues(str) {
  const values = {};
  for (let char of str) {
    if (values[char]) {
      return false;
    }
    values[char] = "exists";
  }
  return true;
}

console.log(uniqueValues("abacdef"));

// with Set
function uniqueValues(str) {
  const values = new Set();

  for (let char of str) {
    if (values.has(char)) {
      return false;
    }
    values.add(char);
  }
  return true;
}

console.log(uniqueValues("abacdef"));
