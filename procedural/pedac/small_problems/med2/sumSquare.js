
//Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.
//given a number, return a number that is the difference between n down to one summed and then squared subtracted by summing all the squares

// rules
//  return 0 if given 0 or 1
// -2 return null if given negative input
// must be able to handle up to 100

// data structures
//  input: number
//  output: number
//    array to handle a range of numbers
//    potential built in methods: map, reduce, indexes can represent numbers

// algorithm
//  create a new array called range with n number of elements [<3 empty items]
//  map over each slot it's index + 1 [1, 2, 3]
//  fold over the range by adding elements together, square total, save to variable squaredSum 6, 36
//  map over the range the square of all numbers [1, 4, 9]
//  sum the squared numbers save as total, sumOfSquares 14
//  subtract squaredSum - sumOfSquares 36 - 14

//3 -- (1 + 2 + 3) ** 2 - (1**2 + 2 ** 2 + 3**2) 36 - 14 = 22

function sumSquareDifference(num) {
  if (num <= 0) return -1;
  let range = [...Array(num).keys()].map(idx => idx + 1);
  let squareSum = range.reduce((total, curr) => total + curr) ** 2;
  let sumOfSquares = range.map(num => num ** 2)
    .reduce((total, curr) => total + curr);
  return squareSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(0));      // 0
console.log(sumSquareDifference(-10));      // 0
console.log(sumSquareDifference(100));    // 25164150