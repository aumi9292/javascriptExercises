/* Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

problem: Given a string, return a correctly formatted string of digits or 10 0's if the string does not represent a valid phone number
rules: A valid phone number
  -has 10 digits (ignoring special characters)
  -if it has 11 and the first is 1, remove the first digit and return the other 10
  -if it is less than 10, or has 11 or more and the first digit is not a 1, return 10 0's

Clarifications
// what inputs could we receive? 
// if any characters are letters, return 10 0s
// if no arguments given or if typeof argument is not a string, return 10 0s

// input: string
// output: string 
// reasoning: in and output already in this structure, access to string methods and regex methods

// 720-292-7829 -- 7202927829
// 1.720.292.7829 -- 7202927829
// 23 -- 0000000000
// 1 333 444 5566 -- 3334445566
// 123 123 454566 -- 0000000000

// algorithm 
// set up bad number constant with 10 0s
// check type of argument and return bad num if it is not string
// search the given string, replace any non-digit character with empty space
// check the length of the string, return BAD_NUM if length is less than 10 or greater than 11
//if length is 11, remove first character
//check if first character is 1
//if yes, return the rest of the number
  //if no, return BAD_NUM

*/

function parseNumber(num) {
  const BAD_NUM ='0000000000';
  if (typeof num !== 'string') return BAD_NUM;
  let cleaned = num.replace(/[^0-9]/g, '');
  if (cleaned.length === 10) return cleaned;
  if (cleaned.length < 10 || cleaned.length > 11) return BAD_NUM;
  let first = cleaned[0];
  if (first === '1') return cleaned.slice(1);
}

console.log(parseNumber('720-292-7829')) //-- 7202927829
console.log(parseNumber('1.720.292.7829')) //-- 7202927829
console.log(parseNumber('23')) //-- 0000000000
console.log(parseNumber('1 333 444 5566')) //-- 3334445566
console.log(parseNumber('123 123 454566')) //-- 0000000000