/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

// Problem: given three numbers, return a string based on whether the three numbers represent an acute, right, obtuse, or invalid triangle based on rules for triangle angles
// Triangle rules
    // a triangle is invalid unless all sides sum to 180, or if any side is 0
    // if all three angles are less than 90, the triangle is acute
    // if one is 90, the triangle is a right triangle
    // if one is > 90, the triangle is obtuse 
// edge case rules
// will always be given three whole integer numbers that represent degrees

// algorithm
//  return 'invalid' if the sum of all three sides is not 180, or if any side is 0
//  return 'acute' if all sides are less than 90
//  return 'right' if one side is 90
//  return 'obtuse if one side is larger than 90



*/

function invalidTri(...sides) {
  return sides.reduce((total, len) => total + len) !== 180 ||
  sides.some(side => side === 0);
}
function triangle(s1, s2, s3) {
  if (invalidTri(s1, s2, s3)) return 'invalid';
  if ([s1, s2, s3].includes(90)) return 'right';
  return [s1, s2, s3].every(side => side < 90) ? 'acute' : 'obtuse';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"