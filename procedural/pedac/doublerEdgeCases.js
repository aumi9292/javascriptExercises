/* 1:05 et
https://launchschool.com/lessons/28467827/assignments/c461b845

// "Write a function called doubler that doubles every value in an array and returns a new array". Do not mutate the original array."
// doubler([1, 2, 3]);  // [2, 4, 6]

// Problem 
//  Given an array, return a new array with elements in the given array 'doubled.'

// Rules
//  Can be present in array: numbers, strings, array, object
//  NaN null or undefined? 
//  Null and undefined: repeated as another element
//  NaN, Infinity, -Infinity: return unchanged
//  numbers: multiply by 2 
//  null, arrays, and object literals are all treated the same
//  if the given argument is not an array, return 'Invalid Input'

//  Do not mutate the given array, return a new array

// Examples
//  doubler([1, 2, 3]) // [2, 4, 6]
//  doubler([1, -2, -3]) // [2, -4, -6]
//  doubler(['a', 'b']) // ['aa', 'bb'] 
//  doubler([1, ['a']]) // [2, ['a'], ['a']]
//  doubler([1, []]) // [2, [], []]
//  doubler([1, {a: 1}]) // [2, {a: 1}, {a: 1}]
//  doubler(['a', NaN]) // ['aa', NaN]
//  doubler(['a', Infinity]) // ['aa', Infinity]
//  doubler(['a', null]) // ['aa', null, null]
//  doubler(['a', undefined]) // ['aa', undefined, undefined]

// Data structures
//  input: array of values and objects
//  output: new array with "doubled" values and objects
//  intermediate: string, number, array, object literal, undefined, nan. null, infinity

// Algorithm
//  if given argument is not an array, return "Invalid Input"
//  init an empty array doubled []
//  iterate over each item in the given array ['a', Infinity]
//    at each item, check what it is
//      if the element is equal to Infinity or NaN, push into the array unchanged 
//      if string, push the string concatenated with itself to doubled ['aa', Infinity]
//      if number, push number * 2 to doubled
//      if its type is an object, push the object into the array 2 times [2, ['a'], ['a']]
//  return doubled array 
*/

function doubler(toDouble) {
  if (!Array.isArray(toDouble)) return "Invalid Input";
  let doubled = [];
  toDouble.forEach(item => {
    if (Math.abs(item) === Infinity || Number.isNaN(item)) {
      doubled.push(item);
    } else if (typeof item === 'string') {
      doubled.push(item.repeat(2));
    } else if (typeof item === 'number') {
      doubled.push(item * 2);
    } else if (typeof item === 'object' || item === undefined) {
      doubled.push(item, item);
    }
  });
    return doubled;
}

//  console.log(doubler()); // "Invalid Input"
//  console.log(doubler([1, 2, 3])); // [2, 4, 6]
//  console.log(doubler([1, -2, -3])); // [2, -4, -6]
//  console.log(doubler(['a', 'b'])); // ['aa', 'bb'] 
//  console.log(doubler([1, ['a']])); // [2, ['a'], ['a']]
//  console.log(doubler([1, []])); // [2, [], []]
//  console.log(doubler([1, {a: 1}])); // [2, {a: 1}, {a: 1}]
//  console.log(doubler(['a', NaN])); // ['aa', NaN]
//  console.log(doubler(['a', Infinity])); // ['aa', Infinity]
//  console.log(doubler(['a', null])); // ['aa', null, null]
//  console.log(doubler(['a', undefined])); // ['aa', undefined, undefined]

// Test Cases:
console.log(doubler([1, 2, 3]));  // [2, 4, 6]
console.log(doubler([null, undefined, [1, 2]])); // [null, null, undefined, undefined, [1, 2],[1, 2]]
console.log(doubler(['hello', 'hi'])); // ['hellohello', 'hihi'] '\n' 
console.log(doubler([true, false])); // [true, true, false, false]
console.log(doubler([{obj1: 1}, {obj2: 2}])); // [{obj1: 1}, {obj1: 1}, {obj2: 2}, {obj2: 2}]
console.log(doubler(Array(5))); // []
console.log(doubler([,,,,]))
console.log(doubler([{}]));
console.log(doubler([]));
console.log(doubler([[1, , , 2]]));                 // [[1, empty × 2, 2], [1, empty × 2, 2]]

console.log(doubler({ a: 'A', b: [] })); // // ["AA", [], []]

console.log(doubler(-1));                           // "Invalid input"
console.log(doubler(function () {}));               // "Invalid input"
console.log(doubler(Infinity));                     // "Invalid input"

// elements that are special number values should remain unchanged
console.log(doubler([NaN, Infinity, -Infinity]));   // [NaN, Infinity, -Infinity]

console.log(doubler(['a'], ['b']));                 // ['aa']

// if the argument is a string, treat it as an array of characters
console.log(doubler('abc'));                        // ["aa", "bb", "cc"]
console.log(doubler('123'));                        // ["11", "22", "33"]
console.log(doubler(''));                           // []

// if the argument is a non-negative integer, treat it as an array of digits
console.log(doubler(123));                          // [2, 4, 6]
console.log(doubler(0));                            // [0]



/*
LINK: 
START TIME: 
END TIME: 
INPUT(S):
  - 
CLARIFICATIONS:
  INPUT Data type(s) (string, boolean, number, null, undefined, collection)
  - 
  VALUES
  - Normal (string, boolean...)
  - Special (NaN, +/- Infinity, .567, -3, [1,,3], [1, 2, a: 'A'])
  EDGE CASES:
  - Invalid Input or Values (data types or values)
  - Emptiness (null/nil, '', [], {})
  - Boundary conditions (max 20 chars & add in 21 chars)
  - Repetition/duplication
  - Uppercase/Lowercase strings/chars
  - Too few/many args
  RETURN VALUE(s): (same or new object, same or different data types, duplicates, order)
  - 
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors
REQUIREMENTS:
  - 
  - 
  - 
TEST CASES:
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
DESCRIBE THE PROBLEM:
  - 
DATA STRUCTURE:
  - 
ALGORITHM (break into problems + guard clauses):
  - 
*/

// CODE:


// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:
