// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names,
// which should be separated by an ampersand.

// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

// Codewars - Format a string of names like 'Bart, Lisa & Maggie'.

// a
function listOfNames(namesArr) {
  if (namesArr.length === 1) {
    return namesArr[0].name;
  }
  let result = "";

  namesArr.forEach((item, index) => {
    const name = item.name;

    if (index === namesArr.length - 1) {
      result += " & " + name;
    } else if (index === namesArr.length - 2) {
      result += name;
    } else {
      result += name + ", ";
    }
  });
  return result;
}

console.log(
  listOfNames([{ name: "Mark" }, { name: "Chris" }, { name: "Kelly" }])
);
console.log(listOfNames([{ name: "Mark" }]));

// b
function listOfNames(namesArr) {
  return namesArr.reduce((prev, current, index, arr) => {
    if (index === 0) {
      return current.name;
    } else if (index === arr.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
}

console.log(
  listOfNames([{ name: "Mark" }, { name: "Chris" }, { name: "Kelly" }])
);
console.log(listOfNames([{ name: "Mark" }]));
