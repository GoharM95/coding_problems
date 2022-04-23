// 1 + 3 + 6 = 10 return true : false

function arraySum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const max = sortedArr.pop();
  console.log(sortedArr);
  const sum = sortedArr.reduce((acc, elem) => acc + elem, 0);
  return sum === max;
}

console.log(arraySum([1, 3, 6, 10]));
