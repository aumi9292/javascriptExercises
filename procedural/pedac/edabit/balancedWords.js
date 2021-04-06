/*
We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

Write a function that returns true if the word is balanced, and false if it's not.

// Problem: Given a string, return true or false if the word is balanced according to the rules. 
//  Rules: 
//    Characters on the left half of the string must have an equal translated alpha value as the characters on the right side of the word
//    If a string length is odd, ignore the count of the middle character 
//    Given string will only contain lowercase alpha characters. 

// Notes
//  Palindromes are always balanced

// Examples/tests
// balanced('zips') // -- 25 + 9 === 16 + 19 true
// balanced('aba') // -- 0 === 0 true
// balanced('abc') // -- 0 === 2 false
// balanced('aabaa') // -- 0 === 0 true
// balanced('aadab') // -- 0 === 1 false

// Data Structures
//  strings: length, 
//  numbers: length / 2, % to understand evenness/oddness, === to compare sides
//  array: string to lookup alpa values

// Algorithm
// init an alpha array that has all alpha characters
// split the given string into an array of characters
// note whether a chars array has an odd or even number of characters
// init a halfway at Math.floor(chars.length / 2) 'aaa' length of 3 / 2 floor = 1
//  if the chars array is odd, treat halfway as an exclusive ending index
//    pull characters from 0 up to exclusive index, save as first half 'aaa'
//    pull chracters from idx + 1 up to chars.length, save as second half
//  if the chars array is even, include all elements in one of the two arrays
//    pull chars from 0 up to half exclusive 'aaaa'
//    pull chars from halfWay idx up to then end
//  map over each array its position in the alphabet array
//  reduce each array to a summed total
//  return the comparsion of firstHalf and secondHalf


*/

function balanced(toCheck) {
  let alpha = [...'abcdefghijklmnopqrstuvwxyz'];
  let chars = toCheck.split('');
  let isOddLength = chars.length % 2 === 1;
  let halfway = Math.floor(chars.length / 2);
  let firstHalf;
  let secondHalf;
  if (isOddLength) {
    firstHalf = chars.slice(0, halfway);
    secondHalf = chars.slice(halfway + 1, chars.length);
  } else {
    firstHalf = chars.slice(0, halfway);
    secondHalf = chars.slice(halfway, chars.length);
  }
  let halves = [firstHalf, secondHalf].map(chars => {
    return chars.reduce((total, letter) => {
      return alpha.indexOf(letter) + total
    }, 0);
  });
  return halves[0] === halves[1];
}

console.log(balanced('zips')); // -- 25 + 9 === 16 + 19 true
console.log(balanced('aba')); // -- 0 === 0 true
console.log(balanced('abc')); // -- 0 === 2 false
console.log(balanced('aabaa')); // -- 0 === 0 true
console.log(balanced('aadab')); // -- 0 === 1 false