/* 9:57 - 10:37

Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".

findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057

findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370

findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// 0 and 1 are missing
*/

// Problem 
//  Given an array of all 4 digit numbers, return the first four digit number when all digits 0-9 have been seen, or return 'Missing Digits!' if not all digits 0-9 are included in numbers in the array. 
// RULES
//  digits can be discovered in any order
//  the 4-digit number where the final 0-9 digit is found should be returned
//  could not be given an array
//  if given an array, must ensure that all elements are numbers

// Examples
//  findAllDigits([1023, 4567, 8900]) // 8900
//  findAllDigits([4567, 8900, 1023]) // 1023
//  findAllDigits([4567, 4567, 8900, 1023]) // 1023
//  findAllDigits([4567, 4567, 8900, 8900]) // 'Missing digits!'
//  findAllDigits('') // null
//  findAllDigits({}) // null
//  findAllDigits([4567, 'hello']) // null

// Data Structures
//  input: array of numbers
//  output: a number
//  intermediate: array of numbers (could be sorted), string of numbers(can be directly compared)

// Algorithm 
//[1023, 4567, 8900]
//  if input is not an array, return null
//  if any element in the array is not a number or is NaN, return null
//  init allDigits string with 0-9 let allDigits = '0123456789';
//  init digitsToCheck empty array let digitsToCheck = [];
//  iterate over the numbers input array
//    at each number, coerce each number to a string, split it into an array of string digits
//      For each str digit in the array, push to digitsToCheck if digitsToCheck does not already include that digit
// ['4', '5', '6', '7', 8, 9, 0, 1, 2, 3]
//    After adding each digit, check if the sorted, joined digitsToCheck is === to allDigits, return the element and stop iterating
//  If digitsToCheck is never equal to allDigits, reuturn 'Missing Digits!'

function findAllDigits(numbers) {
  if (!Array.isArray(numbers)) return null;
  if (numbers.some(num => typeof num !== 'number' || Number.isNaN(num))) return null;
  let allDigits = '0123456789';
  let digitsToCheck = [];
  for (let idx = 0; idx < numbers.length; idx++) {
    let num = numbers[idx];
    let currNumCheck = [...String(num)];
    currNumCheck.forEach(numChar => {
      if (!digitsToCheck.includes(numChar)) {
        digitsToCheck.push(numChar);
      }
    });
    digitsToCheck.sort();
    if (digitsToCheck.join('') === allDigits) return num;
  }

  return 'Missing Digits!';
}

console.log(findAllDigits([1023, 4567, 8900])); // 8900
console.log(findAllDigits([4567, 8900, 1023])); // 1023
console.log(findAllDigits([4567, 4567, 8900, 1023])); // 1023
console.log(findAllDigits([4567, 4567, 8900, 8900])); // 'Missing digits!'
console.log(findAllDigits('')); // null
console.log(findAllDigits({})); // null
console.log(findAllDigits([4567, 'hello'])); // null
console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381])); // 3370