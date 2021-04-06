// time: 8:24 - 8:52

// Create a function that takes an array and return the most frequently occuring element contained within it.

// findFrequent([3, 7, 3]) ➞ 3

// findFrequent([null, "hello", true, null]) ➞ null

// findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false

// given an array with mixed data types, return the value that occurs most in the array. 
//  Rules
//  will always be given an array
//  can include numbers
//  can include strings
//  can include booleans
//  can include null
//  can include undefined

//  Questions
//  What is the array has an element that occurs the same number of times? Won't be given this
//  What should happen if the array is empty? Return empty array

//`Examples
// findFrequent([3, 7, 3]) // 3
// findFrequent([]) // []
// findFrequent([null, "hello", true, null]) // null
// findFrequent([false, "up", "down", "left", "right", true, false]) // false

// Algorithm
//[3, 7, 3] [null, "hello", true, null]
//if the length of the given array is 0, return []
//  Init an array to hold unique elements
//  Iterate over the array, at each element, push into uniques if uniques does not include it 
//[3, 7] [null, "hello", true]
//  Iterate over uniques
//  For each unique, map over each value the return value of the length of the filter for the given array for that element
//[2, 1] [2, 1, 1]
//  Copy the values array, sort descending, save the first count as maxCount 
//[2, 1] -- 2 [2, 1, 1] 2
//  Find the index of the count in the UniqueCounts array 
//0, 0
//  return the element at this index from the uniques array
//3, null

function findFrequent(coll) {
  if (coll.length === 0) return [];
  let uniques = [];
  coll.forEach(el => {
    if (!uniques.includes(el)) uniques.push(el);
  });
  let uniqueCounts = uniques.map(val => {
    return coll.filter(el => el === val).length;
  });
  let highestCount = [...uniqueCounts].sort((a, b) => b - a)[0];
  let idxOfMostFreq = uniqueCounts.indexOf(highestCount);
  return uniques[idxOfMostFreq];
}

console.log(findFrequent([3, 7, 3])); // 3
console.log(findFrequent([])); // []
console.log(findFrequent([null, "hello", true, null])); // null
console.log(findFrequent([false, "up", "down", "left", "right", true, false])); // false