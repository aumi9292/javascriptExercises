/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

// problem: given a string and a key, return an encrypted string based on the caesar cipher rules
// Rules
//  the key is a number that represents a number of alphabetical characters to transpose the given character, e.g., a, 3 --> d
//  encrypted chacters should be the same case of the character in the given plaintext
//  if any character is not alphabetical, do not transpose, but do include in the returned encrypted string
//  if the shifted value exceeds what would be the final character in the alphabet, the number should "wrap around" to the start of the alphabet. y, 3 --> b 25th Math.abs(25 - 26)// w, 5 -- 23 + 5 -- 28, character code + key - 26
// if the key exceeds 25, it wraps around as well-- a, 47 -- v 47 % 26 is the key 
// 65 is uppercase A 90 is uppercase z, 97 is lowercase a 122 is lowercase z


// examples
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// data structures
// input: string and a number
// output: string 
// arrays--mapping, number (character codes and indexes)

// algorithm 
//  split the string into an array of characters
//  map over each character its character code
//  check the key--if it is greater than 26, set the key equal to the remainder of dividing it by 26
//  map over the character codes charCode + key 
//  subtract alphabet length if the new character is not a-zA-Z
//  map over each char code its string character
//  join the string 

*/

function transposeCode(code, key) {
  let transposed = code + key;
  if ((code >= 65 && code <= 90) && transposed > 90) transposed -= 26;
  if ((code >= 97 && code <= 122) && transposed > 122) transposed -= 26;
  return String.fromCharCode(transposed);
}

function generateCodesKeepNonAlphas(plaintext) {
  return plaintext.split('').map(char => {
    return /[a-zA-Z]/.test(char) ? char.charCodeAt() : char;
  });
}

function valid(code) {
  return typeof code === 'number';
}

function caesarEncrypt(plaintext, key) {
  let codes = generateCodesKeepNonAlphas(plaintext);
  if (key > 26) key %= 26;
  return codes
    .map(code => (valid(code) ? transposeCode(code, key) : code))
    .join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"