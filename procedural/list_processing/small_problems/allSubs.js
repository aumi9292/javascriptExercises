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
