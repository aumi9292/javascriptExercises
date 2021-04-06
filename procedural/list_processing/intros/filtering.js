let count = [1, 2, 3, 4, 5];

let filtered = count.filter((el, idx, arr) => {
  return el;
});

console.log(filtered);

function myFilter(array, func) {
  let filtered = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (func(array[idx], idx, array)) {
      filtered.push(array[idx]);
    }
  }
  return filtered;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let check = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

console.log(check);



function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

let check2 = multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]
console.log(check2);