/* start time: 6:37 pm 

Given a letter, create a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.

Notes
All letters will be given in lowercase.
There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".

nearestVowel("b") // "a" 
nearestVowel("s") // "u" 
nearestVowel("c") // "a" 
nearestVowel("i") // "i" 
*/

// Problem
//  Given a string that consists of a sinlgle character, return a new single character string that holds the closest vowel character.

// Rules
//  Always can expect a string
//  The input string will always have a single vowel or non vowel lowercase alphabetic character
//  Do not consider vowels that you must "wrap" around from the end to the beginning or vice versa to reach
//  If given empty string, return - 1
//  If given an argument that is not a string, return -1
//  If given a string that is more than 1 char, only consider the first character 

// Examples and test cases

// nearestVowel("b") // "a" a b c d e
// nearestVowel("s") // "u" s t u
// nearestVowel("c") // "a" a b c d e
// nearestVowel("i") // "i" i
// nearestVowel("") // -1
// nearestVowel("ab") // "a"
// nearestVowel([]) // -1

// Data Structures
//  input: string
//  return value: a string or number 
//  Intermediate: array, numbers (indexes of alphabetic characters)

// Algorithm 'c'
//  if typeof argument is not a string, return -1 
//  if length of argument is 0, return -1
//  if length of argument is > 1, reassing argument to argument[0]
//  init an array to hold all vowel characters, save as vowels [aeiou]
//  init an array to hold all alphabetical lwoercase characters, save as alpha [...'abcdefghijklmnopqrstuvwxyz']
//  iterate over this vowels array [...'aeiou']
//    map over each vowel, its position in the alpha array, save as vowelPositions [0, 4, 8 ...]
//  find the index of the given character in the alpha array, save as toFindIdx c idx is 2
//  push the index into the vowelPositions array  [0, 4, 8, ..., 2]
//  sort the vowelPositions Array, by the numerical value (cb comparison function) [0, 2, 4 ...]
//  find the index of toFindIdx in the new, sorted vowelPositions array vowelPosition.indexOf(toFindIdx) 1
//    if the index is 0 or vowelPosition.length - 1, return the alphabetical character at the corresponding index
//  check if the difference bw the number at the preceding index and the toFindIdx is smaller than ore equal to the number at vowelPositions[toFindIdx + 1]. Math.abs(2 - 0) >= Math.abs(2 - 4)
//  if toFindIdx - vowelPositions[toFindIdx - 1] <= toFindIdx - vowelPositions[toFindIdx + 1] save as closestVowelIdx vowelPositions[toFindIdx - 1] 
//  return the vowel at vowelPositions[closestVowelIdx]
//  Otherwise, return character at vowelPositions[toFindIdx + 1]

function invalidChar(char) {
  return typeof char !== 'string' || char.length === 0;
}

function findNearestVowel(allIdxs, toFindIdx) {
  let charIdxInVowels = allIdxs.indexOf(toFindIdx);
  let earlyVowel = allIdxs[charIdxInVowels - 1];
  let laterVowel = allIdxs[charIdxInVowels + 1];
  let earlyDiff = Math.abs(toFindIdx - earlyVowel);
  let laterDiff = Math.abs(toFindIdx - laterVowel);
  return earlyDiff <= laterDiff ? earlyVowel : laterVowel
}


function nearestVowel(char) {
  if (invalidChar(char)) return -1;
  if (/aeiou/.test(char)) return char;
  char = char[0];
  
  const alpha = [...'abcdefghijklmnopqrstuvwxyz'];
  const vowelPositions = [...'aeiou'].map(vowel => alpha.indexOf(vowel));
  
  let toFindIdx = alpha.indexOf(char);
  let allIdxs = vowelPositions.concat(toFindIdx).sort((a, b) => a - b);

  let nearestVowel = findNearestVowel(allIdxs, toFindIdx);
  return alpha[nearestVowel];
  
}


console.log(nearestVowel("b")); // "a" a b c d e
console.log(nearestVowel("l")); // "i" a b c d e

console.log(nearestVowel("s")); // "u" s t u
console.log(nearestVowel("c")); // "a" a b c d e
console.log(nearestVowel("i")); // "i" i
console.log(nearestVowel("")); // -1
console.log(nearestVowel("ab")); // "a"
console.log(nearestVowel([])); // -1
