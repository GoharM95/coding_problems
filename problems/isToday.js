// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.
// Make sure that your function does not return a false positive by only checking the day.

// Codewars - Is the date today
function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

console.log(isToday(today)); // Tue Apr 19 2022 === Tue Apr 19 2022
console.log(isToday(tomorrow)); // Tue Apr 19 2022 !== Wed Apr 20 2022

// const today = new Date();
// const day = today.getDay();
// const month = today.getMonth();
// const year = today.getFullYear();
