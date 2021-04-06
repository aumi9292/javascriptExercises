/*
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

[1, 2, 1] [5, 1, 5] (low-high-low or high-low-high)


// Problem: Given a 1D array, return the number of sub-arrays with a length of 3 that satisfy boomerang requirements
//  Boomerang requirements
//    must be length 3
//    first and third element must be equal
//    middle eement must be different than the other two
//    Boomerangs can overlap

// Questions
//  Can I always expect a 1D array? 
//  Can I always expect the array will have a length >= 3
//  Can I always expect there will be only numbers in the array? 


// Examples
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

// Data structures: array, number

// Algorithm
//  Init a total at 0
//  From 0 up to the length of the given array minus 3, iterate over each number
//    At each number, check if the element at idx + 1 is !== to the current number, and that element at idx + 2 === to the current number
//    If yes, increment a total
//  Return the total
*/

function countBoomerangs(toCheck) {
  let total = 0;
  for (let idx = 0; idx <= toCheck.length - 3; idx++) {
    if (toCheck[idx] === toCheck[idx + 2] &&
    toCheck[idx] !== toCheck[idx + 1]) {
      total += 1;
    }
  }
  return total;
}


console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // ➞ 2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // ➞ 1
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // ➞ 0