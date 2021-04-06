// start: 12: 56
// finished 1:21

//Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

// Triangle fits if it has the same or smaller size as the hole.

// The function should return false if the triangle with that dimensions is not possible.

// Problem 
//  Given two arrays that each represent dimensions of a triangle, return a boolean whether the first has dimensions that are all small than the secon

// Triangle rules
//  The two shorter sides of a triangle, must be greater than the longer side

// Examples
// doesTriangleFit([1, 1, 1], [1, 1, 1]) // true
// doesTriangleFit([1, 1, 1], [2, 2, 2]) // true
// doesTriangleFit([2, 4, 5], [2, 8, 9]) // true
// doesTriangleFit([1, 2, 3], [1, 2, 2]) // false
// doesTriangleFit([1, 2, 4], [1, 2, 6]) // false
// doesTriangleFit([1, 2, 4]) // null
// doesTriangleFit('hello') // null
// doesTriangleFit({}) // null


// Data Structures
//  input: array of numbers
//  output: boolean

// Algorithm
//  if either triangle argument is not an array, return null
//  validate each triangle 
//    sort the triangle 
//    if tri[0] + tri[1] <= tri[2] return false
//  map over the first triangle
//    the difference bw the element in the second triangle at the corresponding idx, save as dimDiffs

//  iterate over dimDiffs, if some elements are greater than 0, return false, otherwise return true 

function invalidTri(dims) {
  return dims[0] + dims[1] <= dims[2];
}

function doesTriangleFit(tri1, tri2) {
  if ([tri1, tri2].some(dim => !Array.isArray(dim))) return null;
  [tri1, tri2].forEach(dim => dim.sort((a, b) => a - b));
  if (invalidTri(tri1) || invalidTri(tri2)) return false;
  let dimDiffs = tri1.map((side, idx) => side - tri2[idx]);
  return dimDiffs.every(dim => dim <= 0);
}



console.log(doesTriangleFit([1, 1, 1], [1, 1, 1])); // true
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2])); // true
console.log(doesTriangleFit([4, 2, 5], [2, 8, 9])); // true
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2])); // false
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6])); // false
console.log(doesTriangleFit([1, 2, 4])); // null
console.log(doesTriangleFit('hello')); // null
console.log(doesTriangleFit({})); // null