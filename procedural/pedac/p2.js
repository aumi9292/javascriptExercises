/*

The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

// problem 
Given a string, return a boolean t/f whether the string contains a series of numbers that qualify them as a luhn checksum. Luhn rules: start from right, double every second, subtract 9 if that doubled is gt or equal to 10, sum number, if number % 10 is equal to 0, return true

Examples
problem 1--double every other from the right
rightDoubler('1111') //'2121' from the right, every 2nd digit is doubled
rightDoubler('8763') // '7733' if a number doubles to >= 10, subtract 9 from that number

// split string into array of characters
// map over each character their numerical equivalent
// starting at the length - 2 index, iterate over elements at every other index down to (0?)
// double these values

problem 1.b--sub9 if number >= 10
sub9(11) // 2
sub9(3) // 3

//check if number is >= 10
//if yes, return number - 9
// if no, return number

problem 2--sum the rightDoubled series of numbers
sum('2121') // 6 
sum('7733') // 20

//fold over the array of numbers by adding each one to the rolling sum

problem 3--determine if sum is valid Luhn number

rules: sum must end with one or more zeros (sum % 10 === 0)
luhn('1111') // false
luhn'8763') // true

// check if given number can be evenly divided by 10

Overall problem rules
// ignore all non-numeric characters in the string
// if no numerics, return false

// clean string, remove all non digits
// return false if length of cleaned str is 0


____
problem 3--determine if sum is valid Luhn number

rules: sum must end with one or more zeros (sum % 10 === 0)
luhn('1111') // false
luhn'8763') // true

// check if given number can be evenly divided by 10
*/

function returnLuhn(str) {
  if (luhn(str)) return str;
  str = luhn(str) + '0';
  for (let i = 1; i <= 9; i++) {
    str = str.slice(0, str.length - 1) + i;
    if (luhn(str)) {
      return str;
    }
  }
  return str;
}

console.log(returnLuhn('2323 2005 7766 355')) // 2323200577663554

function luhn(toCheck) {
  if (typeof toCheck !== 'string') return false;
  let clean = toCheck.replace(/^\d/g, '');
  if (clean.length === 0) return false;
  let checkSum = sum(rightDoubler(clean).map(num => sub9(num)));
  return checkSum % 10 === 0;
}

console.log(luhn('1111')) // false
console.log(luhn('8763')) // true
console.log(luhn('87  63')) // true
console.log(luhn('aaa')) // false
console.log(luhn('2323 2005 7766 3554')) // true
console.log(luhn([])) // false
console.log(luhn("-0.1110")) // false
console.log(luhn("00208")) // true


function sum(nums) {
  return nums.reduce((total, num) => total + num);
}

console.log(sum([2, 1, 2, 1])) // 6 
console.log(sum([7, 3, 7, 3])) // 20


function sub9(num) {
  return num >= 10 ? num - 9 : num;
}

console.log(sub9(11)) // 2)
console.log(sub9(3)) // 3)

function rightDoubler(str) {
  let nums = str.split('').map(num => Number(num));
  for (let idx = nums.length - 2; idx >= 0; idx -= 2) {
    nums[idx] *= 2;
  }
  return nums;
}

console.log(rightDoubler('1111')); //'2121' from the right, every 2nd digit is doubled
console.log(rightDoubler('8763')); // '7733' if a number doubles to >= 10, subtract 9 from that number

