/*
// problem 
//  given two numbers, return a new number with second-digit number of digits from the right rotated the first to the last of that subset of numbers

//  rules must be given number 1 up to the length of the first number - 1
//  rotating means that the first digit in the subset of numbers is rotated to the end
//  if only given 1 number, return that number
//  if given a second number larger than the length of the first number, return null
//  if either arg is not a number, return null

// examples
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219 19 -- 91
rotateRightmostDigits(735291, 3);      // 735912 291 -- 912
rotateRightmostDigits(735291, 4);      // 732915 5291 -- 2915
rotateRightmostDigits(735291, 5);      // 752913 -- 35291 --52913
rotateRightmostDigits(735291, 6);      // 352917
rotateRightmostDigits(735291, 10);      // null
rotateRightmostDigits(735291);      // 735291
rotateRightmostDigits('a', 10);      // null
rotateRightmostDigits([], []);      // null

// data structures
//  numbers, arrays, strings
// algorithm 
//  return null if either arg is not a number 
//  return null if 2ndArg is larger than 1stArg.length
//  coerce the first number into a string '735291'
//  split it into an array of characters [7, 3, 5, 2, 9, 1]
//  from -2nd_arg to length - 1, copy these elements into another array slice(-2, arr.length -1)
// slice(0, -2ndArg)
//  move the first element to the last position in this sub array slice(1).concat(0)
//  concat the first part of the string digits with this rotated array
//  join each str digit
//  coerce str num to number
*/

function rotateRightmostDigits(toRot, place) {
  if ([toRot, place].some(arg => typeof arg !== 'number')) return null;
  if (place > String(toRot).length) return null;
  let numArr = String(toRot).split('');
  let nonRotating = numArr.slice(0, -place);
  let rotating = numArr.slice(-place, numArr.length);
  let rotated = rotating.slice(1).concat(rotating[0]);
  return Number(nonRotating.concat(rotated).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219 19 -- 91
console.log(rotateRightmostDigits(735291, 3));      // 735912 291 -- 912
console.log(rotateRightmostDigits(735291, 4));      // 732915 5291 -- 2915
console.log(rotateRightmostDigits(735291, 5));      // 752913 -- 35291 --52913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(735291, 10));      // null
console.log(rotateRightmostDigits(735291));      // null
console.log(rotateRightmostDigits('a', 10));      // null
console.log(rotateRightmostDigits([], []));      // null