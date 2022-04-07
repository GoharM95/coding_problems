// 1
const rightDirObj = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
};

function getTime(str) {
  let minTime = 0;
  let step;
  const rightDirObjLength = Object.keys(rightDirObj).length;

  for (let i = 0; i < str.length; i++) {
    const prevChar = str[i - 1] || "A";
    const currChar = str[i];
    let arc1 = Math.abs(rightDirObj[currChar] - rightDirObj[prevChar]);
    let arc2 = rightDirObjLength - arc1;

    if (arc2 < arc1) {
      step = arc2;
    } else {
      step = arc1;
    }
    minTime += step;
  }
  return minTime;
}

console.log(getTime("BZA"));
console.log(getTime("ABZAA"));

// 2
function maxTrailing(arr) {
  let maxDiff = 0;

  for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {
    let pointer1 = 0;
    while (pointer1 < pointer2) {
      const prevElem = arr[pointer1];
      const currElem = arr[pointer2];
      const currDiff = currElem - prevElem;
      maxDiff = maxDiff < currDiff ? currDiff : maxDiff;
      pointer1++;
    }
  }
  return maxDiff;
}

console.log(maxTrailing([5, 3, 6, 7, 4]));
console.log(maxTrailing([5, 6, 8]));

// 3
function getCount(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        const currElem = arr[i];
        const elem = arr[j];
        if (currElem % elem === 0) {
          count++;
        }
        if (elem % currElem === 0) {
          count++;
        }
      }
    }
    result.push(count);
  }
  return result;
}

console.log(getCount([1, 3, 4, 2, 2, 6]));
