function itemsSort(arr) {
  const map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  const sortedUniqueNumbersByValueCount = Object.keys(map)
    .map((elem) => +elem)
    .sort((a, b) => map[a] - map[b]);

  const sortedNumbersByValueCount = [];

  for (let i = 0; i < sortedUniqueNumbersByValueCount.length; i++) {
    const elem = sortedUniqueNumbersByValueCount[i];

    let count = 0;
    while (count < map[elem]) {
      sortedNumbersByValueCount.push(elem);
      count++;
    }
  }
  return sortedNumbersByValueCount;
}

console.log(itemsSort([4, 5, 6, 5, 4, 4, 3]));
