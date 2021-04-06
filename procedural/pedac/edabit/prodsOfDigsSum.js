//Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

// Problem
//  Given an arbitrary amount of at least 1 number, return the numbers reduced to a single number that is made from multiplying each digit together until the total length of the number split into digits is 1

// Rules
//  Can expect 1 or more numbers as input

// Examples
// console.log(prodSum([1])); // 1
// console.log(prodSum([2, 6])); // 8 -- 2 + 6 = 8 
// console.log(prodSum([10, 15])); // 1 --10 + 15 = 25, 2 * 5 = 10, 1 * 1 = 1 
// console.log(prodSum([16, 28])); // 6 --16 + 28 = 44, 4 * 4 = 16 1 * 6 = 6

// Data structures: 
//  Input: array of numbers
//  Output: one-digit number

// Algorithm
//  Fold over array of given numbers to one number by summing them all
//  While the length of the string number is greater than 1
//  make the number a string
//  split into array of characters
//  reduce all number versions of numbers into a single product number
//  return product number 

function prodSum(...numbers) {
  let sum = numbers.reduce((total, curr) => total + curr, 0);
  let strNum = String(sum);
  while (strNum.length > 1) {
    strNum = String(strNum.split('').reduce((prod, curr) => prod * Number(curr), 1));
  }
  return Number(strNum);
}
console.log(prodSum(1)); // 1
console.log(prodSum(2, 6)); // 8 -- 2 + 6 = 8 
console.log(prodSum(10, 15)); // 1 --10 + 15 = 25, 2 * 5 = 10, 1 * 0 = 0
console.log(prodSum(16, 28)); // 6 --16 + 28 = 44, 4 * 4 = 16 1 * 6 = 6