function leadingSubstrings(str) {
  return str.split('').map(function(_, idx, chars) {
    return chars.slice(0, idx + 1).join('');
  });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]