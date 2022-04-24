// get unique company names (for selection for example)

const products = [
  {
    title: "Iphone 8",
    company: "apple",
  },
  {
    title: "Galaxy",
    company: "samsung",
  },
];

function getUnique(arr) {
  const companies = arr.map((obj) => obj.company);
  return [...new Set(companies)];
}

// console.log(getUnique(products));

// with reduce
function getUnique(arr) {
  return [
    ...arr.reduce((acc, curr) => {
      acc.add(curr.company);
      return acc;
    }, new Set()),
  ];
}

console.log(getUnique(products));
