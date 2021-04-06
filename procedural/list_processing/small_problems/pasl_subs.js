function leadingSubstrings(str) {
  return str.split('').map(function(_, idx, chars) {
    return chars.slice(0, idx + 1).join('');
  });
}

function substrings(str) {
  return str
    .split('')
    .flatMap((_, idx) => leadingSubstrings(str.slice(idx)));
}

console.log(substrings('abcde'));

function palindromes(str) {
  console.log(substrings(str).filter(el => {
    return el.split('').reverse().join('') === el.split('').join('') &&
    el.length > 1;
  }));
}




console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]