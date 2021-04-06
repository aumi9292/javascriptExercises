/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// problem: given a number, return the next "featured number"
//  rules: a featured number is a) a multiple of 7 that b) is odd and c) has no repeating digits
//  the largest possible featured number is 9876543201
//  return -1 if there is no next featured number

// data structure: input: number; output: number
  // intermediates: array of range of numbers, strings to check if a digit in a number is repeated 

// algorithm 
//  return -1 if the number is >= 9876543201
//  starting at 1 + the given argument, iterate from this number to the first multiple of 7
//  save this number to first7Mult
//  from first7Mult up to 9876543201, iterate from one multiple of 7 to the next
//  if the number is odd and there are no repeated characters, return the number
//  if, after iterating, there are no qualifying numbers, return -1



NOTE: The largest possible featured number is 9876543201
*/

function noRepeatedChars(num) {
  let counts = {};
  String(num).split('').forEach(dig => {
    counts[dig] = (counts[dig] || 0) + 1;
  });
  console.log(counts);
  return Object.values(counts).every(count => count === 1);
}

function featured(start) {
  if (start >= 9876543201) return -1;
  let first7Mult = start + 1;
  while (first7Mult % 7 !== 0 && first7Mult % 2 !== 1) first7Mult += 1;
  for (; first7Mult <= 9876543201; first7Mult += 14) {
    if (first7Mult % 2 === 1 && noRepeatedChars(first7Mult)) return first7Mult;
  }
  return -1;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543201));   // -1
console.log(featured(0));            // 7
