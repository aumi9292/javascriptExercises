/* 6:48
Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

Examples
rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

rearrange(" ") ➞ ""

// Problem
//  Given a string of words, return a new string with the words rearranged according to the order of an embedded number that sits within each word
// Rules
//  Given only a space, return an empty string
//  If some word does not have a number, do not include that word in the return string
//  In the new string, words should no longer have their identifying location number
//  If we are not given a string, return null
//  If any number is repeated in different words, return null
//  Sentence lengths over 9 must still be handled correctly 
//  Every word will be separated by 1 or more spaces

// Examples
rearrange("is2 Thi1s T4est 3a") // "This is a Test"
rearrange("4of Fo1r pe6ople g3ood th5e the2") // "For the good of the people"
rearrange(" ") // ""
rearrange("Hi1 you") // "Hi"
rearrange("Hi1  you2") // "Hi you"
rearrange([]) // null
rearrange(10) // null
rearrange("hi1 you1") // null
rearrange("hi1 she2 hi3 he4 you5 me6 yo7 dude8 bob9 meee10") // "hi she hi he you me you dude bob meee"

// Data structures
// Input: string of words with a digit
// Output: a new string that is either empty, has the same or fewer words than the given string, or null
// Intermediate data structures: array of words, array of numbers (sorted)

"Hi1 you"
// Algorithm
//  if given any type of input other than a string, return null
//  if a string is empty or only includes spaces, return ''
//  split the string into an array of words, split on any 1 or more whitespace characters ['hi1', 'you2'] ['hi1', 'you']
//  map over words only the characters that are not digits, save as words ['hi', 'you'] 
//  map over the array of words only the digits that exist in the word, save as positions ['1', '2'] ['1']
//  map over positions, coerce string digits to numbers [1, 2] [1]
//  build an object with keys of each number and values consisting of the count of each number in the positions array {'1': 1, '2': 1} {'1': 1}
//  pull values from the counts object [1, 1] [1]
//  if any value is greater than 1, return null
//  sort positions by each number's numerical value, coerce each number back into a string ['1', '2'] ['1']
//  map over the positions array the word that includes that string digit ['hi', 'you'] ['hi']
// if the length of the mapped over array is 1, return the first element in the array
//  join the array into a string, with words separated by one space 'hi you'
//  return joined string

*/

function rearrange(str) {
  if (typeof str !== 'string') return null;
  if (str.trim().length === 0) return '';
  let rawStr = str.split(/\s+/);
  let words = rawStr.map(word => word.replace(/[0-9]/g, ''));
  let positions = rawStr.map(pos => pos.replace(/[^\d]/g, ''));
  let numPositions = positions.map(strDig => Number(strDig));
  let counts = {};
  numPositions.forEach(num => counts[num] = (counts[num] || 0) + 1);
  if (Object.values(counts).some(count => count > 1)) return null;
  numPositions.sort((a, b) => a - b);
  let strPos = numPositions.map(pos => String(pos));
  let ordered = strPos.map(pos => rawStr.find(word => word.includes(pos)));
  let nearFinal = ordered.map(word => word.replace(/\d/g, ''));
  if (nearFinal.length === 1) return nearFinal[0];
  return nearFinal.join(' ');


}

console.log(rearrange("is2 Thi1s T4est 3a")); // "This is a Test"
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); // "For the good of the people"
console.log(rearrange(" ")); // ""
// console.log(rearrange("Hi1 you")); // "Hi"
console.log(rearrange("Hi1  you2")); // "Hi you"

console.log(rearrange("hi1 you1")); // null
console.log(rearrange("hi1 she2 hi3 he4 you5 me6 yo7 dude8 bob9 meee10")); // "hi she hi he you me you dude bob meee"

console.log(rearrange([])); // null
console.log(rearrange(10)); // null