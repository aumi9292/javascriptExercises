/* 20 minutes
The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

{ 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"

{ 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"

{ 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"

The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
*/

// Problem
// Given an object of numbers as property names and one-word strings, return a new string with property values concatenated together, delineated by a space, and then concatenated again with the value corresponding to property name 2

// Examples
// sayWhat({ 1: "Mommy", 2: "please", 3: "help" }) // 'Mommy please help please'
// sayWhat({ 1: "a", 2: "b", 3: 'c' }) // 'a b c b'
// sayWhat({ 1: "a", 3: 'c' }) // 'a c'
// sayWhat({ 1: "a", 2: "b", 3: 'c', 4: 'd' }) // 'a b c d b'
// sayWhat({}) // "Silence"
// sayWhat() // null

// Data structures
// Input: object with str numbers as prop names and strings as prop values (muttering)
// Output: string (sentence)

// Algorithm 
// { 1: "a", 2: "b", 3: 'c' } {}
//  if typeof mutter is not an object, or mutter is equal to null, return null
//  if the object is empty, return string 'silence' Object.keys(mutter) === 0
//  init empty array, sentence []
//  iterate over the object for word in mutter
//  pushing val into sent
//    sent.push(mutter[word])
//    ['a', 'b', 'c']
//  if mutter['2'] exists
  //  use bracket notation to access mutter['2'] 'b'
  //  push mutter['2'] concatenated to the end of sentence array ['a', 'b', 'c', 'b']
//  return sentence array joined with a space 'a b c b'

function sayWhat(mutter) {
  if (typeof mutter !== 'object' || mutter === null) return null;
  if (Object.keys(mutter).length === 0) return 'Silence';
  let sentence = [];
  for (let word in mutter) {
    sentence.push(mutter[word]);
  }
  if (mutter['2']) sentence.push(mutter['2']);
  return sentence.join(' ');
}

console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" })); // 'Mommy please help please'
console.log(sayWhat({ 1: "a", 2: "b", 3: 'c' })); // 'a b c b'
console.log(sayWhat({ 1: "a", 3: 'c' })); // 'a c'
console.log(sayWhat({ 1: "a", 2: "b", 3: 'c', 4: 'd' })); // 'a b c d b'
console.log(sayWhat({})); // "Silence"
console.log(sayWhat()); // null