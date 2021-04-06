function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

function reverse(word) {
  return word.split('').reverse().join('');
}

function reverseWords(words) {
  return words.split(' ').map(word => {
    return word.length >= 5 ? reverse(word) : word;
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"