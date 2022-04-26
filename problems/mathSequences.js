// decide type of sequence

// 1
function mathSequences(arr) {
  const arithmetic = new Set();
  const geometric = new Set();

  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    const quotient = arr[i] / arr[i - 1];

    arithmetic.add(diff);
    geometric.add(quotient);
  }
  if (arithmetic.size === 1) {
    return "arithmetic";
  } else if (geometric.size === 1) {
    return "geometric";
  } else {
    return -1;
  }
}

console.log(mathSequences([2, 4, 6]));
console.log(mathSequences([3, 9, 27]));
console.log(mathSequences([1, 5, 8]));

// 2
function mathSequences(arr) {
  let isArithmetic = true;
  let isGeometric = true;
  const arithmeticDiff = arr[1] - arr[0];
  const geometricDiff = arr[1] / arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (isArithmetic) {
      const diff = arr[i] - arr[i - 1];
      if (diff !== arithmeticDiff) {
        isArithmetic = false;
      }
    }

    if (isGeometric) {
      const quotient = arr[i] / arr[i - 1];
      if (quotient !== geometricDiff) {
        isGeometric = false;
      }
    }
  }

  if (isArithmetic) {
    return "arithmetic";
  } else if (isGeometric) {
    return "geometric";
  } else {
    return -1;
  }
}

console.log(mathSequences([2, 4, 6]));
console.log(mathSequences([3, 9, 27]));
console.log(mathSequences([1, 5, 8]));
