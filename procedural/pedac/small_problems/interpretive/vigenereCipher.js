/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// problem
//  Given a plaintext string and a keyword, return a new string that consists of characters in the plaintext string being transposed according to the vigenere cipher rules. 
//    Vigenere Cipher Rules
//      Each character in the keyword represents a shift number for the character in the plaintext string
//      The given plaintext string should be divided into sections that match the length of the keyword, and each character in the plaintext should be shifted up according to the given keyword
//      Just like the Caesar cipher, if a shift is greater than the end of the alphabet, it should "wrap around" to the start of the alphabet
//      Non alphabetical characters should be left as is
//      The capitalization of letters in the keyword do not matter, c and C both represent a shift of 2
//      The capitalization of letters in the plaintext string should be preserved
//      The encrypted string should have spacing that matches the plaintext string
//      If keyword length is 0, return the original plaintext
//      If no plaintext or no keyword is given, return null

// Examples
console.log(vigenere('ab', 'cc')); // 'cd'
console.log(vigenere('Ab', 'cc')); // 'Cd'
console.log(vigenere('Ab', 'cC')); // 'Cd'
console.log(vigenere('Ab!', 'cc')); // 'Cd!'
console.log(vigenere('Hi mom', 'bc')); // 'Ik nqn'
console.log(vigenere('xyz', 'b')); // 'yza'
console.log(vigenere('xyz', '')); // 'xyz'
console.log(vigenere('xyz')); // null
console.log(vigenere('Pineapples don't go on pizzas!', 'meat'));

// Data structures
//  input: plaintext string, keyword string
//  output: ciphertext string
//  potential intermediate data structures
//    arrays: indexes, iterate over and map over new characters
//    number: character codes, indexes

// Algorithm

// ensure the keyword matches the length of the plaintext string
//  replace all non alphas in plaintext str with empty space, save this length
//  join the keyword array, pad the end up to the length of the string with the keyword string itself 'abc', 'ab' --'aba'

//  translate the keyword into an array of alphabet indexes
//    init an Alpha array with all letters
//    downcase the keyword string
//    split the keyword into an array of characters
//    map over each character its corresponding index in the alphabet

//  Encryption
//    split the given plaintext into an array of characters
//    [a', 'b', '!', 'c'], [2, 2, 2]
//    Given an array of characters and an array of numbers, return a new array of characters translated by the numbers at corresponding indexes in the second array
//    init idx2 at 0
//    init empty ciphertext str
//    iterate over characters in first array
//    if the character is not an alpha character, push it to the ciphertext
//      else
//        downcase each character
//        at each character, map it to its position in the alpha array + arr2[idx]
          add one to idx2
//      if the resulting number is greater than the alphabet length, subtract 26
//      if the given character was initially uppercase, upcase the character
//
*/

function generateKeyWithMatchingLength(plaintext, keyword, alpha) {
  let plainCharLength = plaintext.replace(/[^a-z]/gi, '').length;
  keyword = keyword.padEnd(plainCharLength, keyword).toLowerCase();
  return keyword.split('').map(char => alpha.indexOf(char));
}

function encrypt(plainChars, keyChars, alpha) {
  let keyIdx = 0;
  let cipher = '';
  plainChars.forEach((char) => {
    if (/[a-z]/gi.test(char)) {
      let translated = alpha.indexOf(char.toLowerCase()) + keyChars[keyIdx];
      if (translated >= alpha.length) translated -= alpha.length;
      char = /[A-Z]/.test(char) ? alpha[translated].toUpperCase() : alpha[translated];
      keyIdx += 1;
    }
    cipher += char;
  });
  return cipher;
}

function vigenere(plaintext, keyword) {
  if (keyword === undefined || plaintext === undefined) return null;
  if (keyword.length === 0) return plaintext;

  let alpha = [...'abcdefghijklmnopqrstuvwxyz'];

  let keyChars = generateKeyWithMatchingLength(plaintext, keyword, alpha);
  let plainChars = plaintext.split('');
  return encrypt(plainChars, keyChars, alpha);
}

console.log(vigenere('ab', 'cc')); // 'cd'
console.log(vigenere('Ab', 'cc')); // 'Cd'
console.log(vigenere('Ab', 'cC')); // 'Cd'
console.log(vigenere('Ab!', 'cc')); // 'Cd!'
console.log(vigenere('Hi mom', 'bc')); // 'Ik nqn'
console.log(vigenere('xyz', 'b')); // 'yza'
console.log(vigenere('xyz', '')); // 'xyz'
console.log(vigenere('xyz')); // null
console.log(vigenere('Pineapples don\'t go on pizzas!', 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!