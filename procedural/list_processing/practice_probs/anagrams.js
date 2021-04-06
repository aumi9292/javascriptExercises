//problem: given a word and an array of words, return a new array that consists of elements from the list of words that are anagrams of the word that is given as the first argument

// examples: given an, [na, an, ba] -- [na, an]

// data: in: string, array of strings, out: new array of strings from given array

//algorithm: 
//select from the given array words where
//splitting the words and checking if the length of that split word is equal to the first arg AND every character from the split word is included in the first arg


function anagram(word, list) {
  return list.filter(check => {
    return word.split('').sort().join() === check.split('').sort().join();
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]