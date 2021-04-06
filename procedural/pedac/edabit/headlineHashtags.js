/* 7:42 am - 8:12 am
Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

Notes
If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
Punctuation does not count towards a word's length.

getHashTags("How the Avocado Became the Fruit of the Global Trade")
➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
➞ ["#visualizing", "#science"]

// Problem
// Given a string of 1 or more words, return an array of the top 3 longest words, according to hashtag rules
//  Punctuation does not count toward word lengths
//  If a string has 3 or less words, return an array with all words sorted in descending order by length
//  If multiple words have the same length, choose the first one of that length for that specific index

// Edge cases
//  Possible inputs: string, number, boolean, undefined, null, NaN, Infinity, array, object literal? 
//  Will words always be separated by 1 space? No, 1 or more spaces
//  Empty string --> return [#, #, #]
//  String with all same length words --> 'a b c' --> ['#a', '#b', '#c']

// Examples
getHashTags('a b c') // ['#a', '#b', '#c']
getHashTags('a b  c') // ['#a', '#b', '#c']
getHashTags('a b') // ['#a', '#b']
getHashTags('aa bbb c') // ['#bbb', '#aa', '#c']
getHashTags('aa b''b'b c') // ['#bbb', '#aa', '#c']
getHashTags('aa bbb c d') // ['#bbb', '#aa', '#c']
getHashTags('aaa bbbb cc d') // ['#bbbb', '#aaa', '#cc']
getHashTags('') // ['#', '#', '#']

// Data Structures
//  string, array (sorting), regex (remove punctuation)

// Algorithm 'aaa bbbb cc d'
//  return -1 if input is not a string 
//  if input is empty string, return ['#', '#', '#']
//  remove non alpha and whitespace chars from words
//  split the given string into an array of words (by 1 or more whitespace characters) ['aaa', 'bbb', 'cc', 'd']
//  sort the array by word.length ['bbbb', 'aaa', 'cc', 'd']
//  slice off the first three elements of the array ['bbbb', 'aaa', 'cc']
//  map over each, itself with a hashtag concatenated to the start ['#bbbb', '#aaa', '#cc']
//  return this mapped array

*/

function getHashTags(headline) {
  if (typeof headline !== 'string') return -1;
  if (headline.length === 0) return ['#', '#', '#'];
  headline = headline.replace(/[^a-z\s]/gi, '');
  let headlineWords = headline.split(/\s+/);
  headlineWords.sort((a, b) => b.length - a.length);
  return headlineWords.slice(0, 3).map(word => '#'.concat(word));
}

console.log(getHashTags('a b c')); // ['#a', '#b', '#c']
console.log(getHashTags('a b  c')); // ['#a', '#b', '#c']
console.log(getHashTags('a b')); // ['#a', '#b']
console.log(getHashTags('aa bbb c')); // ['#bbb', '#aa', '#c']
console.log(getHashTags('aa b"b"..b c')); // ['#bbb', '#aa', '#c']
console.log(getHashTags('aa bbb c d')); // ['#bbb', '#aa', '#c']
console.log(getHashTags('aaa bbbb cc d')); // ['#bbbb', '#aaa', '#cc']
console.log(getHashTags('')); // ['#', '#', '#']
console.log(getHashTags()); // ['#', '#', '#']