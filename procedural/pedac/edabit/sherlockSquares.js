/* 3:02 - 3:25 (but could not figure out the efficiency requirement)
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints (note that a square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25, 36, 49).

For example, the range is a=24 and b=49, inclusive. There are three square integers in the range: 25, 36 and 49.

Complete the squares function that returns an integer representing the number of square integers in the inclusive range from a to b.

squares(3, 9) ➞ 2

squares(17, 24) ➞ 0

squares(1, 1000000000) ➞ 31622

Your solution must solve each problem in 1 second or less.
*/

// Problem
// Given a starting and inclusive ending number, return a total count of the numbers that are squares (a number that is the square of another number). 

// Rules
//  Must be able to traverse large numbers quickly
//  start and endpoints of range are inclusive, they can be counted if they are square numbers

// How to tell if a number is a square number
//  check if the return value of squaring the number by 1/2 is a whole number
//  from 1 up to num ** 1/2) + 1, check if num ** 2 is equal to the number

// Examples 


// Data structures
//  input: numbers (start and end of range to check)
//  output: number (count of primes)
//  intermediate: array (sequence of numbers?) number (count of primes)

// Algorithm
// return null if not given a number
//  init count at 0
//  from start up to end, 
//    check if the num * 1/2 is a whole number 
//      if it is, count += 1
//  return count

function valid(...nums) {
  let isValid = nums.map(num => {
    return typeof num === 'number' && !Number.isNaN(num) && Number.isFinite(num);
  })
  return isValid.every(judgment => judgment);
}

function squares(start, end) {
  if (!valid(start, end)) return null;
  let count = 0;
  for (let toCheck = start; toCheck <= end; toCheck++) {
    let root = toCheck ** (1 / 2);
    if (root === Math.round(root)) count += 1;
  }
  return count;
}

console.log(squares(3, 9)); // 2 -- 4, 9
console.log(squares('')); // null
console.log(squares(Infinity)); // null
console.log(squares(17, 24)); // 0
console.log(squares(1, 1000000000)); // 31622