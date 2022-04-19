// The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
// Examples:
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

// Codewars - Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  let result = 0;

  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    case "*":
      result = value1 * value2;
  }
  return result;
}

console.log(basicOp("+", 4, 5));

// with eval
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp("+", 4, 5));
