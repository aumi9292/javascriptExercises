/*
Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.

Examples
advancedSort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]

advancedSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]

The subarrays should be returned in the order of each element's first appearance in the given array.

Problem: Given a one dimensional array of either all numbers or all strings, return a 2d array with inner arrays of elements that have the same value. 

Rules: 
  Must be given a one dimensional array
  All elements must be strings OR all elements must be numbers
  Elements in the returned 2d array must appear in the order in which they appear in the input 1d array
  Don't mutate the input
  
Examples:
  advancedSort([2, 1, 2, 1]) // [[2, 2], [1, 1]]
  advancedSort(['a', 'a', 'b']) // [['a', 'a'], ['b']]
  advancedSort([1, 2, 1, 2, 1]) // [[1, 1, 1], [2, 2]]
  advancedSort([5, 4, 5, 5, 4, 3]) // [[5, 5, 5], [4, 4], [3]]
  advancedSort([[]]) // -1
  advancedSort([2, 'a']) // -1
  advancedSort([{}, 2]) // -1 
  advancedSort([]) // -1 or []
  advancedSort() // -1 
  advancedSort('') // -1 
  
Data Structures
  input: 1d array of number or strings
  output: 2d array of nested arrays with numbers or strings OR -1 for invalid input or [] for empty array
  
  arrays, numbers, strings
  
Algorithm
  check input ['a', 'a', 'b'] [2, 1, 2, 1]
    return -1 if input is not an array
    return -1 if not every element is either a string or a number (all must be one or the other)
  init boolean called num, assign to the return value of calling the every method and checking if all element are numbers false
  init empty object called counts {}
  iterate over each element in given array ['a', 'a', 'b'] [2, 1, 2, 1]
    for each element either create a k-v pair in the counts object with char at key and an empty array as the value or increment the first el in the value array by +1. If creating this kv pair, note the index as the second element in the value array {'a': [ idx], 'b': 1} {'2': 1}, {'1': 1, '2': 2}
    {'char': [count, idx], 'b': 1} {'2': 1}, {'1': 1, '2': 2}
     {'1': [1, 1], '2': [2, 0]}
    
    pull the keys from the counts object ['a', 'b']
    sort the keys array by counts[char][1] a - b
    map over each el this array of keys from the counts object
      concatenate each elem with itself counts[key] number of times ['aa', 'b']
    
    map over concatenated, the split value ('') of each element [['a', 'a'], ['b']
    if num is true, map over each inner array the coerced Number type
    return this nested array of arrays
    grab the keys, iterate over keys, for each key, find the first index of it in the toSort array, push this first index to counts[key]
*/

function advancedSort(toSort) {
  if (!Array.isArray(toSort)) return -1;
  if (toSort.length === 0) return [];
  let allStrEls = toSort.every(datum => typeof datum === 'string')
  let allNumEls = toSort.every(datum => typeof datum === 'number')
  if (!(allStrEls || allNumEls)) return -1;
  let counts = {};
  toSort.forEach((item, idx) => counts[item] = [(Number(counts[item]) || 0) + 1]);
  let groupedElements = Object.keys(counts);
  groupedElements.forEach(char => {
    let numbified;
    if (/[0-9]/.test(char)) numbified = Number(char);
    counts[char].push(toSort.indexOf(numbified || char))
  });
  
  groupedElements.sort((a, b) => counts[a][1] - counts[b][1])

  let concatenated = groupedElements.map(char => char.repeat(counts[char][0]));

  let sets = concatenated.map(set => set.split(''));
  console.log(concatenated)
  if (allNumEls) sets = sets.map(set => Number(set.join('')))
  return sets;
}


///////
function advancedSort(array) {
  let result = [];
  array.forEach(currentElement => {
    if (!result.flat().includes(currentElement)){
      let subarray = [currentElement];
      result.push(subarray);
    } else {  // step where item has been found already
      let subarrayIndex = getSubArrayIndex(result, currentElement);
      result[subarrayIndex].push(currentElement);                                                                       
    }
  });
    
    return result;
  
}

function getSubArrayIndex(array, currentElement) {
  for (let index = 0; index < array.length; index += 1) {
    let currentSubArray = array[index];
    if (currentSubArray.includes(currentElement)) return index;
  }
}

///
function advancedSort(arr) {
  return [...new Set(arr)].map(x => arr.filter(y => y == x) )
}

// ['a', 'a', 'b']// index b: 2
// subarray index [1]  [[a], [b]]
console.log(advancedSort([2, 1, 2, 1])) // [[2, 2], [1, 1]] ['2', '1']
console.log(advancedSort(['a', 'a', 'b'])) // [['a', 'a'], ['b']]
console.log(advancedSort([1, 2, 1, 2, 1])) // [[1, 1, 1], [2, 2]]
console.log(advancedSort([5, 4, 5, 5, 4, 3])) // [[5, 5, 5], [4, 4], [3]]
// console.log(advancedSort([[]])) // -1
// console.log(advancedSort([2, 'a'])) // -1
// console.log(advancedSort([{}, 2])) // -1 
// console.log(advancedSort([])) // -1 or []
// console.log(advancedSort()) // -1 
// console.log(advancedSort('')) // -1 

//console.log(advancedSort(['c','c','b','c','b',1,1])); //[['c','c','c'],['b','b'],[1,1]])
console.log(advancedSort([1234, 1235, 1234, 1235, 1236, 1235])); //[[1234, 1234],[1235, 1235, 1235],[1236]]));
//console.log(advancedSort(['1234', '1235', '1234', '1235', '1236', '1235'])); //[['1234', '1234'],['1235', '1235', '1235'],['1236']]));