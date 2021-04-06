function odd(num) {
  return num % 2 === 0;
}

let count = [1, 2, 3, 4, 5];
console.log(count.some((num) => num > 100 === 0));
console.log(count.some(odd));

function myOwnEvery(arr, cb) {
  let verdict = true;
  arr.forEach((el, idx, arr) => {
    if (!cb(el)) {
      verdict = false;
    }
  });
  return verdict;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery([1, 2, 3], isAString));       // true

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false