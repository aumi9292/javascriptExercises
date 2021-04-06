function isRealPalindrome(str) {
  let downcased = str.toLowerCase(); 
  let alphaNum = downcased.replaceAll(/[^a-z0-9]/g, '');
  console.log(alphaNum === alphaNum.split('').reverse().join(''));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

let isPalindromicNumber = function(num) {
  let numStr = String(num);
  console.log(numStr.split('').reverse().join('') === numStr);
};

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

function runningTotal(arr) {
  let total = 0;
  return arr.map((el) => {
    total += el;
    return total;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

function swap(str) {
  let words = str.split(' ');
  return words.map((word) => {
    let letters = word.split('');
    let firstLetter = letters[0];
    let lastLetter = letters[letters.length - 1];
    [letters[0], letters[letters.length - 1]] = [lastLetter, firstLetter];
    return letters.join('');
  }).join(' ');
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function wordSizes(sentence) {
  let counts = {};
  let cleaned = sentence.replaceAll(/[^a-z\s]/gi, '');
  cleaned.split(' ').forEach((word) => {
    let key = word.length;
    if (key === 0) return;
    counts[key] ? counts[key] += 1 : counts[key] = 1; 
  });

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}