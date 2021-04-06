console.log("These aren't the droids you're looking for.".length)
str = 'confetti floating everywhere'
console.log(str.toUpperCase())
console.log(str)
function repeat(times, str) {
  final = ''
  for (let i = 0; i < times; i += 1) {
    final += str;
  }
  return final; 
}

console.log(repeat(3, 'ha')); 

str2 = "A pirate I was meant to be!\nTrim the sails and roam the sea!"
console.log(str2)

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function str_case_i_equal(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase()
}

console.log(str_case_i_equal(string1, string3))

console.log('TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu'.includes('x'))

function custom_includes(str, to_find) {
  return RegExp(to_find).test(str)
}

function custom_includes2(str, to_find) {
  return Boolean(str.split('').filter(function(char) {
    return char === to_find}))
}

console.log(custom_includes2('TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu', 'x'))

function isBlank(str) {
  return str.trim().length === 0 
}


console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));

to_cap = 'launch school tech & talk'

function capitalizeSentence(sentence) {
  return sentence.split(' ').map(function(word) { 
    return (word[0].toUpperCase() + word.slice(1))
  }).join(' ')
}

console.log(capitalizeSentence(to_cap)); 