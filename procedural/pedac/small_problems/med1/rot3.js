/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

// problem: given a number, return a new number that is formed from rotating each of the remaining sets of digits from 

735291 --352917 --329175 -- 321759 -- 321597 -- 321579

from the length of the string down to 1, call rotateRightmostDigits with the number and the decreasing place
set the return value of these equal to rotated
return rotated

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

function maxRotation(number) {
  let rotated = number;
  for (let curr = String(number).length; curr > 0; curr--) {
    rotated = rotateRightmostDigits(rotated, curr)
  }
  return rotated;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845