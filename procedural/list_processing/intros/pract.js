let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isOdd = function (num) {
  return num % 2 === 1;
};

let oddNumbers = arr.filter(isOdd);

console.log(oddNumbers);

[1, 2, 3].forEach((n) => console.log(n));