// return second lowest and second greatest values from array

function secondValue(arr) {
  const values = [...new Set(arr)].sort((a, b) => a - b);
  if (values.length < 2) {
    return `${values[0]}`;
  } else if (values.length === 2) {
    return `${values[0]} ${values[1]}`;
  } else {
    return `${values[1]} ${values[values.length - 2]}`;
  }
}

console.log(secondValue([3, 7, 9, 3, 66, 77]));
