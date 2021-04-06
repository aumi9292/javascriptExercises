/*
Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

WECRLTEERDSOEEFEAOCAIVDEN

To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

The first row has seven spots that can be filled with "WECRLTE".

W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Now the 2nd row takes "ERDSOEEFEAOC".

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Leaving "AIVDEN" for the last row.

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

If you now read along the zig-zag shape you can read the original message.

// problem
//  implement encoding and decoding for the rail fence cipher
//    problem 1: encoding
//      given a string and a number of "rails", return a string formed from        
        rearranging the string formatted according to rails cipher rules
//    Rail cipher rules: 
//      characters in a string are split up and re-arranged from a top level rail,    
        moving one rail down and one column to the right for each character. When the final "rail" is reached, place the next character to the right one and up 1 until the top level is reached. At this point, continue moving to the right, and down one level, and so on, until all character in the given string to encode have been rearranged in this pattern 
          When characters have been arranged in this pattern, join characters back together, from top row left to right, next row left to right, etc. 
      Questions/implied rules:
        If not given a number and a string, return null
        If given an empty string, return an empty string
        Strings can consist of alphabetical letters, numbers, and special characters
        Spaces should be dropped
        If given a number of rails that is 0 or 1, return the original string
        If given a number of rails that is larger than or equal to the length of the string, return the original string

//  Algorithm
  // check both arguments and return null if 1st is not a number and second is not a string
  // check 2nd argument, return '' if its length is 0
  // check the first argument, return the original string if it is larger than toEncode's length or if numRails is <= 1 
  // remove spaces from toEncode "WEAREDISCOVEREDFLEEATONCE"
  // note the length of toEncode 25
  // init an array of empty strings that is toEncode's length ['', '', '', etc.]
  // init a fence array to hold each inner array []
  // push RailNumber number of rails into the fence array 
      [['', '', '', etc.], ['', '', '', etc.], ['', '', '', etc.]]


  // init zigZag at 0
  //while zigZag is less than the length of toEncode
    // iterate from 0 up to railNum // 0, 1, 2
      // place toEncode[zigZag] at fence[rung][zigZag] [[W, '', etc], ['', 'E', '', etc.]]
      // increment zigZag += 1 
    //iterate from railNum down to 0
      // place toEncode[zigZag] at fence[rung][zigZag]
      // increment zigZag += 1

    // join each inner array to a string of characters
    // join the fence array to a string of characters 


*/

function badType(railNum, toEncode) {
  return typeof railNum !== 'number' || typeof toEncode !== 'string';
}

function incorrectRailNum(railNum, toEncode) {
  return [0, 1].includes(railNum) || railNum > toEncode.length;
}

function buildFence(railNum, railLength) {
  let fence = [];
  for (let fenceNum = 0; fenceNum < railNum; fenceNum++) {
    fence.push([...Array(railLength)]);
  }
  return fence;
}
function arrangeFence(railNum, cleaned) {
  let rung = 0;
  let last = [];
  let railLength = cleaned.length;
  let fence = buildFence(railNum, railLength);
  for (let zigZag = 0; zigZag < railLength; zigZag++) {
    fence[rung][zigZag] = cleaned[zigZag];
    last.push(rung);
    if (!last.includes(railNum - 1)) {
      rung += 1;
    } else if (last.length === railNum + 1) {
      rung = 0;
      last = [];
    } else {
      rung -= 1;
    }
  }
  return fence;
}

function railsEncode(railNum, toEncode) {
  if (badType(railNum, toEncode)) return null;
  if (incorrectRailNum(railNum, toEncode)) return toEncode;
  let cleaned = toEncode.replace(/\s/g, '');
  return arrangeFence(railNum, cleaned).map(rail => rail.join('')).join('');
}


console.log(railsEncode([], {})); // null
console.log(railsEncode()); // null
console.log(railsEncode(1, '')); // ''

console.log(railsEncode(3, "WE ARE DISCOVERED FLEE AT ONCE")); // WECRLTEERDSOEEFEAOCAIVDEN
console.log(railsEncode(3, "WE ARE DISCOVERED FLEE AT ONCE1")); // WECRLTEERDSOEEFEAOC1AIVDEN
console.log(railsEncode(0, "hello")); // hello
console.log(railsEncode(3, "yo")); // yo



/*
//  Problem 2: decoding
      given an encoded string and a number of "rails" (rows), return the decoded string based on reversing the rails cipher rules process
    Reversed rails rules
      based on the given number of rails and the length of the encoded string, build a structure to represent a pattern of empty slots and slots to place characters
        Deciding where characters should be placed: Starting at the top left, note the position of the slot. Then move right and down until the highest rail is reached, noting each slot position 

        Placing encoded letters: For each noted position, place each character in the order of the encoded string, filling the positions from top row left to right, next row left to right, and so on

        Decoding the encoded, rails-formatted letters: Start at the first position in the top rail and move one rail down and one to the right until the largest rail is reached, noting each letter. Then continue to the right and up until the lowest number rail is reached, noting each letter. Continue until all letters have been noted 


*/

function arrangeFenceToDecode(railNum, encoded) {
  let rung = 0;
  let last = [];
  let railLength = encoded.length;
  let fence = buildFence(railNum, railLength);
  for (let zigZag = 0; zigZag < railLength; zigZag++) {
    fence[rung][zigZag] = 'ADD';
    last.push(rung);
    if (!last.includes(railNum - 1)) {
      rung += 1;
    } else if (last.length === railNum + 1) {
      rung = 0;
      last = [];
    } else {
      rung -= 1;
    }
  }
  return fence;
}

function fillInFence(railNum, encoded) {
  let patternedFence = arrangeFenceToDecode(railNum, encoded);
  let encodedIdx = 0;
  return patternedFence.map(rail => {
    return rail.map(rung => {
      if (rung === 'ADD') {
        encodedIdx += 1;
        return encoded[encodedIdx - 1];
      }
    });
  });
}

function readFence(railNum, encoded) {
  let filledInFence = fillInFence(railNum, encoded);
  let decoded = '';
  let rung = 0;
  let last = [];
  for (let zigZag = 0; zigZag < encoded.length; zigZag++) {
    decoded += filledInFence[rung][zigZag];
    last.push(rung);
    if (!last.includes(railNum - 1)) {
      rung += 1;
    } else if (last.length === railNum + 1) {
      rung = 0;
      last = [];
    } else {
      rung -= 1;
    }
  }
  return decoded;
}

function railsDecode(railNum, encoded) {
  if (badType(railNum, encoded)) return null;
  if (incorrectRailNum(railNum, encoded)) return encoded;
  return readFence(railNum, encoded);
}

console.log(railsDecode([], {})); // null
console.log(railsDecode()); // null
console.log(railsDecode(1, '')); // ''

console.log(railsDecode(3, "WECRLTEERDSOEEFEAOCAIVDEN")); // WE ARE DISCOVERED FLEE AT ONCE
console.log(railsDecode(3, "WECRLTEERDSOEEFEAOC1AIVDEN")); // WE ARE DISCOVERED FLEE AT ONCE1
console.log(railsDecode(0, "hello")); // hello
console.log(railsDecode(3, "yo")); // yo