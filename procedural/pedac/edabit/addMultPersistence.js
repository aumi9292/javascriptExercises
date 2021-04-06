// The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

// The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

// Create two functions that take an integer as an argument and:

// Return its additive persistence.
// Return its multiplicative persistence.

// Problem 
//  given a positive number, return its additive persistence
//  given a positive number, return its multiplicative persistence

//  Definitions
//    additive persistence: the number of times it takes for the digits in a given number to be added together to eventually produce a single digit number
//    multiplicative persistence: the number of times it takes for the digits in a given number to be multiplied together to eventually produce a single digit number

//  Requirements
//    given number will always be positive
//    must write two functions, one for additive, one for multiplicative
//    If a number is already 1 digit, return 0 

//  Examples
//    additivePersistence(6) // 0
//    multiplicativePersistence(6) // 0
//    additivePersistence(10) // 1
//    multiplicativePersistence(10) // 1
//    multiplicativePersistence(67) // 2 -- 6 + 7 = 13 = 1 + 3 = 4
//    multiplicativePersistence(67) // 2 -- 6 * 7 = 42 = 4 * 2 = 8 

//  Data strucutres
//    numbers
//    strings (to see length of digits in number)

//  Algorithm
//    return 0 if the given number, converted to a string, has a length of 1
//    coerce the number to a string
//    init reductions at 0
//    While the length of the numberstring is greater than 1
//    coerce number to string, split into characters, map over each the number equivalent, reduce by + with start of 0 or * with start of 1
//    increment reductions += 1
//    return reductions


function additivePersistence(num) {
  if (String(num).length === 1) return 0;
  let strNum = String(num);
  let reductions = 0;
  while (strNum.length > 1) {
    strNum = String([...strNum].reduce((total, curr) => total + Number(curr), 0));
    reductions += 1;
  }
  return reductions;
}

function multiplicativePersistence(num) {
  if (String(num).length === 1) return 0;
  let strNum = String(num);
  let reductions = 0;
  while (strNum.length > 1) {
    strNum = String([...strNum].reduce((total, curr) => total * Number(curr), 1));
    reductions += 1;
  }
  return reductions;
}

console.log(additivePersistence(6)); // 0
console.log(multiplicativePersistence(6)); // 0
console.log(additivePersistence(10)); // 1
console.log(multiplicativePersistence(10)); // 1
console.log(multiplicativePersistence(67)); // 2 -- 6 + 7 = 13 = 1 + 3 = 4
console.log(multiplicativePersistence(67)); // 2 -- 6 * 7 = 42 = 4 * 2 = 8
