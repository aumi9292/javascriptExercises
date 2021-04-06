/* start time: 5:53, end time: 6:25

A collection of spelling blocks has two letters per block, as shown in this list:


B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

[B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M]

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.


// problem: given a string, return t/f depending on whether it is possible to represent each of the characters using "blocks" with 2 letters per block. 

// rules: 
  // only have one of each block
  // if a letter on a block has been used, the other letter on the block cannot be used (e.g., if B is used, ) can't be in the word
  // case should be ignored

// edge cases: 
  // empty string: return true? 
  // no argument or argument not string: return false
  // string with non-alpha characters: return false

// data structures: 
  // given a string of upper or lowercase characters
  // return a boolean 
    //blocks each have 2 letters -- [b, o], [x, k]
    // array of arrays, with each inner array representing a block

// examples: 
  // isBlockWord('BATCH');      // true
  // isBlockWord('BUTCH');      // false
  // isBlockWord('jest');       // true
  // isBlockWord('');           // true
  // isBlockWord();             // false
  // isBlockWord([]);             // false
  // isBlockWord('a12');             // false
  // isBlockWord('A CUP');             // true

// algorithm
  // check the input string and return false if no argument given, non-string given, or the string contains any non alphabetic characters 'BAT'
  //split each string into an array of characters ['B', 'A', 'T']
  // iterate over each character B, 
  // at each character array, check blocks to see if any inner array includes the current character remove B, O; A, remove A, N; T, remove G, T
    // if yes, remove this inner array, continue iterating over the split input string
    // if not, stop iterating over the string, return false
    //return true at the end 

[['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']]

G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M]
*/

function isBlockWord(word) {
  if (typeof word !== 'string' || word.length === 0 || /[^a-z\s]/i.test(word)) return false;
  let cleaned = word.replace(/[^a-z]/gi, '').toUpperCase().split('');
  let blocks = [
    ['B', 'O'], ['X', 'K'], ['D', 'Q'],
    ['C', 'P'], ['N', 'A'], ['G', 'T'],
    ['R', 'E'], ['F', 'S'], ['J', 'W'],
    ['H', 'U'], ['V', 'I'], ['L', 'Y'],
    ['Z', 'M'],
  ];

  for (let idx = 0; idx < cleaned.length; idx++) {
    let selected = blocks.find(block => block.includes(cleaned[idx]));
    if (selected === undefined) {
      return false;
    } else {
      blocks[blocks.indexOf(selected)].length = 0;
    }
  }
  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));           // false
console.log(isBlockWord());             // false
console.log(isBlockWord([]));           // false
console.log(isBlockWord('a12'));        // false
console.log(isBlockWord('A CUP'));      // true