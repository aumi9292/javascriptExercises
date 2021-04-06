/* 4:12 - 4:42
Create a function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not exact!".

isExact(6) ➞ [6, 3]

isExact(24) ➞ [24, 4]

isExact(125) ➞ "Not exact!"

isExact(720) ➞ [720, 6]

isExact(1024) ➞ "Not exact!"

isExact(40320) ➞ [40320, 8]

There will be no exceptions to handle, all inputs are positive integers.
*/

// Problem
//  Given a number, return either an array with the given number as the first element and the number whose factorial is equal to the given number OR, if the given number is not a factorial of any whole positive number, return "Not Exact!"
//  Requirements
//  Must be a whole, positive number greater than 0

// Questions
//  What is the largest input we have to handle? 

// Examples
// isExact(6) // [6, 3]
// isExact(24) // [24, 4]
// isExact(125) // 'Not Exact!'
// isExact(40320) // [40320, 8]
// isExact() // null
// isExact(-1) // null

// Data structures
//  Input: number
//  Output: array of two numbers, or a string 'Not exact'

// Algorithm
// if toCheck is less than 1, return null
// if typeof tocheck is not equal to 'number' or if toCheck is NaN or Infinity, return null

// implement a function to find the factorial of a given number
//  init factorial at 0
//  from number until number is equal to 2, 
//    factorial += number * number - 1
//    decrement number
//  return factorial 

// iterate from 3 until the factorial of the current number is greater than the given number
//  at each number, find the factorial of the number
//  create factorial from return value of findFactorial function and passing in the current num
//  if factorial === toCheck, return [toCheck, current]

// return 'Not exact!'

function findFactorial(num) {
let seq = [...Array(num).keys()].map(idx => idx + 1);
return seq.reduce((factorial, curr) => factorial * curr);
}

function invalid(upperBound) {
  return typeof upperBound !== 'number' || 
  Number.isNaN(upperBound) || 
  Math.abs(upperBound) === Infinity;
}

function isExact(upperBound) {
  if (invalid(upperBound)) return null;
  if (upperBound < 1) return null;
  for (let toCheck = 3; findFactorial(toCheck) <= upperBound; toCheck++) {
    let currentFact = findFactorial(toCheck);
    if (currentFact === upperBound) return [upperBound, toCheck];
  }
  return 'Not exact!';

}


console.log(isExact(6)); // [6, 3]
console.log(isExact(24)); // [24, 4]
console.log(isExact(125)); // 'Not Exact!'
console.log(isExact(40320)); // [40320, 8]
console.log(isExact()); // null
console.log(isExact(-1)); // null