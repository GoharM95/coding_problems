function findIndex(arr) {
  const sum = arr.reduce((prev, next) => prev + next, 0);
  let left = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const right = sum - arr[i] - left;
    if (left === right) {
      return i;
    } else {
      left += arr[i];
    }
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 4, 6]));
